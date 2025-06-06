import {Injectable} from '@angular/core';
import {Order} from "../shared/model/order.model";
import {Address} from "../shared/model/address.model";
import {ShoppingCart} from "../shared/model/shopping-cart.model";
import {CartItem} from "../shared/model/cart-item.model";
import {ProductService} from "./product.service";
import {DataLoaderService} from "./data-loader.service";
import {User} from "../shared/model/user.model";
import {UserService} from "./user.service";
import {LocalStorageService} from "./local-storage.service";
import {MultipleChargesModel} from "../shared/model/multiple-charges.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private readonly KEY_USER_ORDERS = 'USER_ORDERS';
    private orderList$: BehaviorSubject<Order[] | null> = new BehaviorSubject<Order[] | null>(null);
    private userIdToOrdersMap: Map<number, Order[]> = new Map();
    private lastOrderNumber: number = 1000;

    constructor(public dataLoaderService: DataLoaderService,
                public productService: ProductService,
                private userService: UserService,
                private localStorageService: LocalStorageService) {

        this.dataLoaderService.getDataLoaded$().subscribe((dataLoaded: boolean) => {
            if (dataLoaded) {
                this.initUserOrders();
                this.handleChangeUserSubscription();
                this.initLastOrderNumber();
            }
        });
    }

    private initUserOrders() {

        this.userIdToOrdersMap.clear();

        let userOrdersData: string | null = this.localStorageService.getItem<any>(this.KEY_USER_ORDERS);
        userOrdersData = userOrdersData ? JSON.stringify(userOrdersData, null, 2) : userOrdersData;

        if (userOrdersData && userOrdersData.length > 0) {
            const parsedUserOrders = JSON.parse(userOrdersData);
            for (const userId in parsedUserOrders) {
                if (parsedUserOrders.hasOwnProperty(userId)) {

                    let tempOrders: [] = parsedUserOrders[userId];
                    if (!Array.isArray(tempOrders)) {
                        console.error(`Invalid order data for user ID ${userId}. Expected an array, but got:`, tempOrders);
                        continue; // Skip this user if the data is not an array
                    }

                    const orders: Order[] = tempOrders.map((orderData: any) => {

                        const items: CartItem[] = orderData.shoppingCart.cartItems.map((item: any) => {
                            const product = this.productService.findProductById(item.product.id);
                            return product ? new CartItem(product, item.quantity) : null;
                        }).filter((item: CartItem | null) => item !== null) as CartItem[];

                        return new Order(
                            Number(orderData.id),
                            parseInt(orderData.orderNumber),
                            orderData.strOrderArrivedIn,
                            new Date(orderData.orderDate),
                            new Date(orderData.orderDate),
                            new Date(orderData.orderDate),
                            orderData.paymentMode,
                            new Address(0, '', '', '', '', '', '', 0, ''),
                            new ShoppingCart(new MultipleChargesModel(), items),
                            orderData.status
                        );

                    });

                    this.userIdToOrdersMap.set(Number(userId), orders);
                }
            }
        } else {
            //  If no user orders are found in localStorage, initialize with an empty map
            this.localStorageService.setItem(this.KEY_USER_ORDERS, this.userIdToOrdersMap);
            // localStorage.setItem(this.KEY_USER_ORDERS, JSON.stringify(Object.fromEntries(this.userIdToOrdersMap), null, 2));
            // console.log('this.userIdToOrdersMap: ' + JSON.stringify(Object.fromEntries(this.userIdToOrdersMap), null, 2));

            console.log('No user orders found in localStorage. Initializing with an empty map.');
        }

        //  Initialize the orderList$ for the current logged-in user
        const loggedInUser = this.userService.getLoggedInUser();
        const orders = this.userIdToOrdersMap.get(loggedInUser.getId());
        if (orders) this.orderList$.next(orders);
        else console.log('No Orders found for the logged-in user:', loggedInUser.getUsername());

    }

    private handleChangeUserSubscription() {
        this.userService.getLoggedInUser$().subscribe((user: User) => {
            if (user.isGuest()) return;

            if (!this.userIdToOrdersMap.has(user.getId())) {
                this.userIdToOrdersMap.set(user.getId(), []);
                this.localStorageService.setItem(this.KEY_USER_ORDERS, this.userIdToOrdersMap);
                // localStorage.setItem(this.KEY_USER_ORDERS, JSON.stringify(Object.fromEntries(this.userIdToOrdersMap), null, 2));

            }

            //  If the orders for the logged-in user are different from the current order list, update the order list
            if (this.userIdToOrdersMap.get(user.getId()) !== this.orderList$.getValue())
                this.orderList$.next(this.userIdToOrdersMap.get(user.getId())!);
        });
    }

    private initLastOrderNumber() {
        //  Load last order number from local storage or initialize it
        const lastOrderNumber = this.localStorageService.getItem<number>('LAST_ORDER_NUMBER');
        if (lastOrderNumber) this.lastOrderNumber = lastOrderNumber;
        else {
            //  If no last order number is found in local storage, then save the initial value
            this.localStorageService.setItem('LAST_ORDER_NUMBER', this.lastOrderNumber);
        }
    }

    /*
    private initOrderListForAllUsers() {
        const ordersData = this.dataLoaderService.getDataList('order');
        if (ordersData && ordersData.length > 0) {
            ordersData.forEach((orderData: any) => {
                const userId = orderData.userId;
                if (!this.userIdToOrdersMap.has(userId)) this.userIdToOrdersMap.set(userId, []);

                const items: CartItem[] = orderData.items.map((item: any) => {
                    const product = this.productService.findProductById(item.productId);
                    return product ? new CartItem(product, item.quantity) : null;
                }).filter((item: CartItem | null) => item !== null) as CartItem[];

                const shoppingCart = new ShoppingCart(this.multipleChargesManagerService.getMultipleChargesModel());
                items.forEach(item => shoppingCart.addCartItemWithQty(item));

                const order = new Order(
                    Number(orderData.orderId.replace('ORD', '')),
                    parseInt(orderData.orderId.replace('ORD', ''), 10),
                    'N/A',
                    new Date(orderData.orderDate),
                    new Date(orderData.orderDate),
                    new Date(orderData.orderDate),
                    'N/A',
                    new Address(0, '', '', '', '', '', '', 0, ''),
                    shoppingCart
                );
                order.setStatus(orderData.status);

                const currentOrderNum = parseInt(orderData.orderId.replace('ORD', ''), 10);
                if (currentOrderNum > this.lastOrderNumber) {
                    this.lastOrderNumber = currentOrderNum;
                }

                this.userIdToOrdersMap.get(userId)?.push(order);
            });
        }

        const allUserIds = this.dataLoaderService.getDataList('user').map((u: any) => u.id);
        allUserIds.forEach(uid => {
            if (!this.userIdToOrdersMap.has(uid)) {
                this.userIdToOrdersMap.set(uid, []);
            }
        });
    }

    createDummyOrder(itemCount: number): Order {
        let tempOrder: Order = new Order(
            Math.floor(Math.random() * 10000),
            this.lastOrderNumber++,
            '9 minutes',
            new Date(),
            new Date(),
            new Date(),
            'Cash on Delivery',
            new Address(1, 'Home', '123 Main St', '', 'City', 'Landmark', 'John Doe', 1234567890, ''),
            new ShoppingCart(this.multipleChargesManagerService.getMultipleChargesModel())
        );

        const allProducts: Product[] = this.productService.getAllProductList();
        for (let i = 0; i < itemCount && i < allProducts.length; i++)
            tempOrder.getShoppingCart().addCartItemWithQty(new CartItem(allProducts[i], 5));

        return tempOrder;
    }
    */

    createNewOrder(shoppingCart: ShoppingCart, selectedAddress: Address): Order | null {

        if (!shoppingCart || shoppingCart.getItemCount() === 0) {
            console.error('Cannot create order with an empty shopping cart.');
            return null;
        }

        const userId = this.userService.getLoggedInUser()?.getId();
        if (!userId) {
            console.error('No user is logged in to create an order.');
            return null;
        }

        const orderNumber = this.lastOrderNumber++;
        const newOrder = new Order(
            Math.floor(Math.random() * 10000),
            orderNumber,
            '10 minutes',
            new Date(),
            new Date(),
            new Date(),
            'Cash on Delivery',
            selectedAddress,
            shoppingCart
        );

        // Set the status of the order
        newOrder.setStatus('Pending');

        // Add the order to the main order list (which is a reference to the user's order list)
        this.orderList$.getValue()?.push(newOrder);

        // Add the order to the user's order list
        // if (!this.userIdToOrdersMap.has(userId)) this.userIdToOrdersMap.set(userId, []);
        // this.userIdToOrdersMap.get(userId)?.push(newOrder);

        // Update the local storage with the new order list for the user
        this.localStorageService.setItem(this.KEY_USER_ORDERS, this.userIdToOrdersMap);
        // localStorage.setItem(this.KEY_USER_ORDERS, JSON.stringify(Object.fromEntries(this.userIdToOrdersMap), null, 2));

        //  Save last order number to local storage
        this.localStorageService.setItem('LAST_ORDER_NUMBER', this.lastOrderNumber);

        return newOrder;
    }

    getOrderById(orderId: string): Order | undefined {
        return this.orderList$.getValue()?.find((order: Order) => order.getId() === Number(orderId));
    }

    getOrderByOrderNumber(orderNumber: number): Order | undefined {
        if (orderNumber === undefined || orderNumber === null) return undefined;
        return this.orderList$.getValue()?.find((order: Order) => order.getOrderNumber() === orderNumber);
    }


    //  Getters
    //  -------

    public getOrderList$(): BehaviorSubject<Order[] | null> {
        return this.orderList$;
    }

    public getOrderList(): Order[] | null {
        return this.orderList$.getValue();
    }

    public getAllOrders(): Order[] {
        return Array.from(this.userIdToOrdersMap.values()).flat();
    }

}

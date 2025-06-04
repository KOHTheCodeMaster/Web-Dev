import {Injectable} from '@angular/core';
import {Order} from "../shared/model/order.model";
import {Address} from "../shared/model/address.model";
import {ShoppingCart} from "../shared/model/shopping-cart.model";
import {MultipleChargesManagerService} from "./multiple-charges-manager.service";
import {CartItem} from "../shared/model/cart-item.model";
import {ProductService} from "./product.service";
import {DataLoaderService} from "./data-loader.service";
import {User} from "../shared/model/user.model";
import {Product} from "../shared/model/product.model";
import {UserService} from "./user.service";
import {LocalStorageService} from "./local-storage.service";
import {MultipleChargesModel} from "../shared/model/multiple-charges.model";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private readonly KEY_USER_ORDERS = 'USER_ORDERS';
    private orderList: Order[] = [];
    private userOrders: Map<number, Order[]> = new Map();
    private lastOrderNumber: number = 1000;

    constructor(public dataLoaderService: DataLoaderService,
                public productService: ProductService,
                public multipleChargesManagerService: MultipleChargesManagerService,
                private userService: UserService,
                private localStorageService: LocalStorageService) {

        //  ToDO: Analyze & Update this OrderService Class Completely from fresh perspective for local storage service!

        this.userService.getLoggedInUser$().subscribe((user: User) => {
            if (user.isGuest()) return;

            if (!this.userOrders.has(user.getId())) {
                this.userOrders.set(user.getId(), []);
                this.localStorageService.setItem(this.KEY_USER_ORDERS, JSON.stringify(Object.fromEntries(this.userOrders)));
            }
            this.orderList = this.userOrders.get(user.getId())!;
        });

        this.dataLoaderService.getDataLoaded$().subscribe((dataLoaded: boolean) => {
            if (dataLoaded) this.initUserOrders();
        });
    }

    private initUserOrders() {

        this.userOrders.clear();

        const userOrdersData: string | null = this.localStorageService.getItem(this.KEY_USER_ORDERS);
        if (userOrdersData && userOrdersData.length > 0) {
            const parsedUserOrders = JSON.parse(userOrdersData);
            for (const userId in parsedUserOrders) {
                if (parsedUserOrders.hasOwnProperty(userId)) {
                    const orders: Order[] = parsedUserOrders[userId].map((orderData: any) => {
                        const items: CartItem[] = orderData.items.map((item: any) => {
                            const product = this.productService.findProductById(item.productId);
                            return product ? new CartItem(product, item.quantity) : null;
                        }).filter((item: CartItem | null) => item !== null) as CartItem[];

                        const shoppingCart = new ShoppingCart(new MultipleChargesModel(), items);

                        const order = new Order(
                            Number(orderData.orderId),
                            parseInt(orderData.orderId),
                            'N/A',
                            new Date(orderData.orderDate),
                            new Date(orderData.orderDate),
                            new Date(orderData.orderDate),
                            'N/A',
                            new Address(0, '', '', '', '', '', '', 0, ''),
                            shoppingCart
                        );
                        order.setStatus(orderData.status);

                        return order;
                    });

                    this.userOrders.set(Number(userId), orders);
                }
            }
        }
        else {
            //  If no user orders are found in localStorage, initialize with an empty map
            // localStorage.setItem(this.KEY_USER_ORDERS, JSON.stringify(Object.fromEntries(this.userOrders)));
            localStorage.setItem(this.KEY_USER_ORDERS, '{}');
        }
    }

    private initOrderListForAllUsers() {
        const ordersData = this.dataLoaderService.getDataList('order');
        if (ordersData && ordersData.length > 0) {
            ordersData.forEach((orderData: any) => {
                const userId = orderData.userId;
                if (!this.userOrders.has(userId)) this.userOrders.set(userId, []);

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

                this.userOrders.get(userId)?.push(order);
            });
        }

        const allUserIds = this.dataLoaderService.getDataList('user').map((u: any) => u.id);
        allUserIds.forEach(uid => {
            if (!this.userOrders.has(uid)) {
                this.userOrders.set(uid, []);
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

    createNewOrder(shoppingCart: ShoppingCart, selectedAddress: Address): Order | null {

        if (!shoppingCart || shoppingCart.getItemCount() === 0) {
            console.error('Cannot create order with an empty shopping cart.');
            return null;
        }

        const userId = this.userService.getLoggedInUser()?.getId();
        if (userId === undefined || userId === null) {
            console.error('No user is logged in to create an order.');
            return null;
        }

        const orderNumber = this.lastOrderNumber++;
        const newOrder = new Order(
            Math.floor(Math.random() * 10000),
            orderNumber,
            'N/A',
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
        this.orderList.push(newOrder);

        // Add the order to the user's order list
        // if (!this.userOrders.has(userId)) this.userOrders.set(userId, []);
        // this.userOrders.get(userId)?.push(newOrder);

        // Update the local storage with the new order list for the user
        this.localStorageService.setItem(this.KEY_USER_ORDERS, JSON.stringify(Object.fromEntries(this.userOrders)));

        return newOrder;
    }

    getOrderById(orderId: string): Order | undefined {
        return this.orderList.find((order: Order) => order.getId() === Number(orderId));
    }

    getOrderByOrderNumber(orderNumber: number): Order | undefined {
        if (orderNumber === undefined || orderNumber === null) return undefined;
        return this.orderList.find((order: Order) => order.getOrderNumber() === orderNumber);
    }


    //  Getters
    //  -------

    public getOrderList(): Order[] {
        return this.orderList;
    }

}

import {Injectable} from '@angular/core';
import {Order} from "../shared/model/order.model";
import {Address} from "../shared/model/address.model";
import {ShoppingCart} from "../shared/model/shopping-cart.model";
import {MultipleChargesManagerService} from "./multiple-charges-manager.service";
import {CartItem} from "../shared/model/cart-item.model";
import {ProductService} from "./product.service";
import {DataLoaderService} from "./data-loader.service";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private orderList: Order[] = [];

    constructor(public dataLoaderService: DataLoaderService,
                public productService: ProductService,
                public multipleChargesManagerService: MultipleChargesManagerService) {

        this.dataLoaderService.getDataLoaded$().subscribe((dataLoaded: boolean) => {
            if (dataLoaded) {
                //  Initialize the order list
                this.initOrderList();
            }
        });

    }

    private initOrderList() {
        this.orderList.push(this.createDummyOrder(6));
        this.orderList.push(this.createDummyOrder(3));
        this.orderList.push(this.createDummyOrder(4));
        this.orderList.push(this.createDummyOrder(5));
        this.orderList.push(this.createDummyOrder(6));
        this.orderList.push(this.createDummyOrder(7));
    }

    createDummyOrder(itemCount: number): Order {
        let tempOrder: Order = new Order(
            1,
            '9 minutes',
            new Date(),
            new Date(),
            new Date(),
            'Cash on Delivery',
            new Address(1, 'Home', '123 Main St', '', 'City', 'Landmark', 'John Doe', 1234567890, ''),
            new ShoppingCart(this.multipleChargesManagerService.getMultipleChargesModel())
        );

        for (let i = 0; i < itemCount; i++)
            tempOrder.getShoppingCart().addCartItem(new CartItem(this.productService.getAllProductList()[1], 5));

        return tempOrder;
    }

    getOrderById(orderId: string): Order | undefined {
        return this.orderList.find((order: Order) => order.getId() === Number(orderId));
    }


    //  Getters
    //  -------

    public getOrderList(): Order[] {
        return this.orderList;
    }

}

import {Injectable} from '@angular/core';
import {Order} from "../shared/model/order.model";
import {MultipleChargesModel} from "../shared/model/multiple-charges.model";
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
        this.orderList.push(this.createDummyOrder(this.multipleChargesManagerService.getMultipleChargesModel()));
    }

    createDummyOrder(multipleChargesModel: MultipleChargesModel) : Order {
        let tempOrder: Order = new Order(
            1,
            '9 minutes',
            '2:09 PM',
            '2:00 PM',
            new Date(),
            'Cash on Delivery',
            new Address(1, 'Home', '123 Main St', '', 'City', 'Landmark', 'John Doe', 1234567890, ''),
            new ShoppingCart(multipleChargesModel)
        );

        let cartItem1: CartItem = new CartItem(this.productService.getAllProductList()[0], 3);
        let cartItem2: CartItem = new CartItem(this.productService.getAllProductList()[1], 5);
        tempOrder.getShoppingCart().addCartItem(cartItem1);
        tempOrder.getShoppingCart().addCartItem(cartItem2);

        return tempOrder;
    }

    //  Getters
    //  -------

    public getOrderList(): Order[] {
        return this.orderList;
    }


}

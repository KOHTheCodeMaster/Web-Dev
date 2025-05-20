import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Order} from "../../shared/model/order.model";
import {OrderService} from "../../service/order.service";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";

@Component({
    selector: 'app-orders',
    standalone: true,
    imports: [RouterLink, NgForOf, NgIf, SlicePipe],
    templateUrl: './orders.component.html'
})
export class OrdersComponent {

    orderList: Order[] = [];

    constructor(private router: Router,
                private orderService: OrderService) {

        this.orderList = this.orderService.getOrderList();

    }

}

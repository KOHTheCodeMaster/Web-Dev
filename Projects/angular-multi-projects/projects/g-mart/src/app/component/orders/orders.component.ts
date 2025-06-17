import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
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

    constructor(public router: Router,
                public route: ActivatedRoute,
                private orderService: OrderService) {

        this.orderService.getOrderList$().subscribe((orders: Order[] | null) => {
            if (orders && orders.length > 0) this.orderList = orders;
        });

    }

}

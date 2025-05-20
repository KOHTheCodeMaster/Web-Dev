import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Order} from "../../shared/model/order.model";
import {OrderService} from "../../service/order.service";
import {formatDate, NgForOf} from "@angular/common";
import {MultipleChargesModel} from "../../shared/model/multiple-charges.model";

@Component({
    selector: 'app-order-details',
    standalone: true,
    imports: [RouterLink, NgForOf],
    templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {

    protected readonly MultipleChargesModel = MultipleChargesModel;
    order!: Order;

    constructor(public router: Router,
                public route: ActivatedRoute,
                public orderService: OrderService) {

        this.initOrder();

    }

    private initOrder() {

        let orderId = this.route.snapshot.paramMap.get('orderId');
        let tempOrder = this.orderService.getOrderById(orderId ? orderId : '');
        if (tempOrder) this.order = tempOrder;
        else {
            this.order = this.orderService.createDummyOrder(0);
            this.router.navigate(['/orders']);
        }

    }

    protected readonly formatDate = formatDate;
}

import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Order} from "../../shared/model/order.model";
import {OrderService} from "../../service/order.service";
import {NgForOf, NgIf} from "@angular/common";
import {MultipleChargesModel} from "../../shared/model/multiple-charges.model";

@Component({
    selector: 'app-order-details',
    standalone: true,
    imports: [RouterLink, NgForOf, NgIf],
    templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {

    protected readonly MultipleChargesModel = MultipleChargesModel;
    order: Order | null = null;

    constructor(public router: Router,
                public route: ActivatedRoute,
                public orderService: OrderService) {

        this.orderService.getOrderList$().subscribe((orders: Order[] | null) => {
            if (orders) this.initOrder();
        });

    }

    private initOrder() {

        let orderNumber: number = Number(this.route.snapshot.paramMap.get('orderNumber'));
        let tempOrder = this.orderService.getOrderByOrderNumber(orderNumber ? orderNumber : -1);
        if (tempOrder) this.order = tempOrder;
        else this.router.navigate(['/orders']); //  Redirect to '/orders' page if order not found

    }

}

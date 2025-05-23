import {Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ShoppingComponent} from "./component/shopping/shopping.component";
import {OrdersComponent} from "./component/orders/orders.component";
import {AddressesComponent} from "./component/addresses/addresses.component";
import {OrderDetailsComponent} from "./component/order-details/order-details.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shopping', component: ShoppingComponent},
    {path: 'orders/:orderNumber', component: OrderDetailsComponent},
    {path: 'orders', component: OrdersComponent},
    /*
        {
            path: 'orders',
            component: OrdersComponent,
            children: [{path: 'orders/:orderId', component: OrderDetailsComponent},]
        },
    */
    {path: 'addresses', component: AddressesComponent}
];

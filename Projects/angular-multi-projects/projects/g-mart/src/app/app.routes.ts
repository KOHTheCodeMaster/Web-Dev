import {Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ShoppingComponent} from "./component/shopping/shopping.component";
import {OrdersComponent} from "./component/orders/orders.component";
import {AddressesComponent} from "./component/addresses/addresses.component";
import {OrderDetailsComponent} from "./component/order-details/order-details.component";
import {LoginComponent} from "./component/login/login.component";
import {AuthGuardService} from "./service/auth-guard.service";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shopping', component: ShoppingComponent},
    {path: 'orders/:orderNumber', component: OrderDetailsComponent, canActivate: [AuthGuardService]},
    {path: 'orders', component: OrdersComponent, canActivate: [AuthGuardService]},
    /*
        {
            path: 'orders',
            component: OrdersComponent,
            children: [{path: 'orders/:orderId', component: OrderDetailsComponent},]
        },
    */
    {path: 'addresses', component: AddressesComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},

];

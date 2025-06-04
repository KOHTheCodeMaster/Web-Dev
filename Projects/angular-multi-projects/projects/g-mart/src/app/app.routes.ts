import {Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ShoppingComponent} from "./component/shopping/shopping.component";
import {OrdersComponent} from "./component/orders/orders.component";
import {AddressesComponent} from "./component/addresses/addresses.component";
import {OrderDetailsComponent} from "./component/order-details/order-details.component";
import {LoginComponent} from "./component/login/login.component";
import {AdminDashboardComponent} from "./component/admin-dashboard/admin-dashboard.component";
import {AdminRedirectGuard} from "./service/admin-redirect.guard";
import {AdminAccessGuard} from "./service/admin-access.guard";
import {AuthGuard} from "./service/auth.guard";

export const routes: Routes = [

    {path: '', component: HomeComponent, canActivate: [AdminRedirectGuard]},
    {path: 'shopping', component: ShoppingComponent, canActivate: [AdminRedirectGuard]},
    {path: 'orders/:orderNumber', component: OrderDetailsComponent, canActivate: [AuthGuard]},
    {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
    {path: 'addresses', component: AddressesComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, canActivate: [AdminRedirectGuard]},
    {path: 'admin', component: AdminDashboardComponent, canActivate: [AdminAccessGuard]},
    {path: '**', redirectTo: '/', pathMatch: 'full'}

    /*
        {
            path: 'orders',
            component: OrdersComponent,
            children: [{path: 'orders/:orderId', component: OrderDetailsComponent},]
        },
    */

];

import {Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ShoppingComponent} from "./component/shopping/shopping.component";
import {OrdersComponent} from "./component/orders/orders.component";
import {AddressesComponent} from "./component/addresses/addresses.component";
import {OrderDetailsComponent} from "./component/order-details/order-details.component";
import {LoginComponent} from "./component/login/login.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {AdminDashboardComponent} from "./component/admin-dashboard/admin-dashboard.component";
import {AdminGuardService} from "./service/admin-guard.service";

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
    {path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuardService]},
    {path: '**', redirectTo: '/', pathMatch: 'full'}    //  Add any other path to redirect to home

];

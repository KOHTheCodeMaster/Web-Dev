import {Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ShoppingComponent} from "./component/shopping/shopping.component";
import {OrdersComponent} from "./component/orders/orders.component";
import {AddressesComponent} from "./component/addresses/addresses.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shopping', component: ShoppingComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'addresses', component: AddressesComponent}
];

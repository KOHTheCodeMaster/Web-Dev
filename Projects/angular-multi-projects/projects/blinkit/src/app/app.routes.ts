import {Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ShoppingComponent} from "./component/shopping/shopping.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shopping', component: ShoppingComponent},
];

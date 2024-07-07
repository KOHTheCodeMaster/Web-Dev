import {Routes} from "@angular/router";
import {SecondCompComponent} from "./components/routing/demo-routing-1/second-comp.component";
import {FirstCompComponent} from "./components/routing/demo-routing-1/first-comp.component";
import {ThirdCompComponent} from "./components/routing/demo-routing-1/third-comp.component";
import {HomeComponent} from "./components/demo-practice/homes/components/home/home.component";
import {DetailsComponent} from "./components/demo-practice/homes/components/details/details.component";

export const routes: Routes = [
    {path: 'first-comp', component: FirstCompComponent},
    {path: 'second-comp', component: SecondCompComponent},
    {path: 'third-comp', component: ThirdCompComponent},
    {path: '', component: HomeComponent},
    {path: 'homes', component: HomeComponent},
    {path: 'homes/details/:id', component: DetailsComponent}
];

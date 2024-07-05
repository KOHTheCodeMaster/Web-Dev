import {Routes} from "@angular/router";
import {SecondCompComponent} from "./components/routing/demo-routing-1/second-comp.component";
import {FirstCompComponent} from "./components/routing/demo-routing-1/first-comp.component";
import {ThirdCompComponent} from "./components/routing/demo-routing-1/third-comp.component";

export const routes: Routes = [
    {path: 'first-comp', component: FirstCompComponent},
    {path: 'second-comp', component: SecondCompComponent},
    {path: 'third-comp', component: ThirdCompComponent}
];

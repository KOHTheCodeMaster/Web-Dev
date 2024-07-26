import {Routes} from "@angular/router";
import {FirstCompComponent} from "./components/routing/sample-components/first-comp.component";
import {SecondCompComponent} from "./components/routing/sample-components/second-comp.component";
import {ThirdCompComponent} from "./components/routing/sample-components/third-comp.component";

export const routes: Routes = [
    {path: 'first-comp', component: FirstCompComponent},
    {path: 'second-comp', component: SecondCompComponent},
    {path: 'third-comp', component: ThirdCompComponent},
];

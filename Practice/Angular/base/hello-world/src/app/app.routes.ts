import {Routes} from "@angular/router";
import {SampleRouteFirstComponent} from "./components/routing/sample-route-components/sample-route-first.component";
import {SampleRouteSecondComponent} from "./components/routing/sample-route-components/sample-route-second.component";
import {SampleRouteThirdComponent} from "./components/routing/sample-route-components/sample-route-third.component";

export const routes: Routes = [
    {path: `sample-route-first`, component: SampleRouteFirstComponent},
    {path: `sample-route-second`, component: SampleRouteSecondComponent},
    {path: `sample-route-third`, component: SampleRouteThirdComponent},
];

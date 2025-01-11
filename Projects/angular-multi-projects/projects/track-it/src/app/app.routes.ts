import {Routes} from '@angular/router';
import {ManageLabelsComponent} from "./components/manage-labels/manage-labels.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'manage-labels', component: ManageLabelsComponent},
];

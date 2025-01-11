import {Component} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {LabelService} from "../../service/label.service";
import {Label} from "../../shared/model/label.model";
import {DataLoaderService} from "../../service/data-loader.service";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-manage-labels',
    standalone: true,
    imports: [
        SidebarComponent,
        NgForOf
    ],
    templateUrl: './manage-labels.component.html',
    styleUrl: './manage-labels.component.css'
})
export class ManageLabelsComponent {

    labelsTotalCount: number;
    labelList: Label[];

    constructor(private dataLoaderService: DataLoaderService,
                private labelService: LabelService) {

        this.labelList = [];
        this.labelsTotalCount = 0;

        this.initSubscriptions();

    }

    private initSubscriptions() {

        this.labelService.getLabelListUpdated$().subscribe(isLabelListUpdated => {

            if (isLabelListUpdated) {
                this.labelList = this.labelService.getLabels();
                this.labelsTotalCount = this.labelList.length;

/*
                for (let i = 0; i < this.labelList.length; i++) {
                    let label: Label = this.labelList[i];
                    console.log('Id: ' + label.getId());
                    console.log('Name: ' + label.getName());
                }
*/

            }

        });

    }

}

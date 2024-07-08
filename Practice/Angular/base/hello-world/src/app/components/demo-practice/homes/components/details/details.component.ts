import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {HousingLocation} from "../../stub/housinglocation";
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {HousingDBService} from '../../stub/housing-db.service';

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {

    route: ActivatedRoute = inject(ActivatedRoute);
    housingDBService: HousingDBService = inject(HousingDBService);
    housingLocation: HousingLocation | undefined;

    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    });

    constructor() {
        const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
        this.housingDBService.getHousingLocationById(housingLocationId).then(housingLocation => {
            this.housingLocation = housingLocation;
        });
    }

    submitApplication() {
        this.housingDBService.submitApplication(
            this.applyForm.value.firstName ?? '',
            this.applyForm.value.lastName ?? '',
            this.applyForm.value.email ?? '',
        );
    }

}

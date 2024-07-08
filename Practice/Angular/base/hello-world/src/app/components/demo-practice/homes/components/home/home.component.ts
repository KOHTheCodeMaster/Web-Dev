import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {HousingLocation} from "../../stub/housinglocation";
import {HousingService} from "../../stub/housing.service";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HousingLocationComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    housingLocationList: HousingLocation[] = [];
    filteredHousingLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);

    constructor() {
        this.housingLocationList = this.housingService.getAllHousingLocations();
        this.filteredHousingLocationList = this.housingLocationList;
    }

    filterHousingLocation(cityName: string) {

        console.log('filterHousingLocation() invoked. cityName: ' + cityName);

        if (!cityName) {
            this.filteredHousingLocationList = this.housingLocationList;
            return;
        }

        this.filteredHousingLocationList = this.housingLocationList.filter(housingLocation =>
            housingLocation.city.toLowerCase().includes(cityName.toLowerCase())
        );
    }

}

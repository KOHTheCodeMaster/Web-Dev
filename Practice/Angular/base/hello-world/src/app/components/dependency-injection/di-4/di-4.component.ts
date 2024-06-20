import {Component} from '@angular/core';
import {DiWithInjectableService} from "../../../services/dependency-injection/di-with-injectable.service";
import {
    DiServiceWithDependencyService
} from "../../../services/dependency-injection/di-service-with-dependency.service";

@Component({
    selector: 'app-di-4',
    standalone: true,
    imports: [],
    template: `<p>di-4 - diServiceWithDependencyService - {{ this.name }}</p>`
})
export class Di4Component {

    name: string = 'John Doe';

    constructor(public diServiceWithDependencyService: DiServiceWithDependencyService) {
        console.log('Di4Component Constructor Invoked.');
    }

}

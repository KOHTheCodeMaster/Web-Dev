import {Component} from '@angular/core';
import {DiWithoutProvidedInService} from "../../../services/dependency-injection/di-without-provided-in.service";

@Component({
    selector: 'app-di-2',
    standalone: true,
    imports: [],
    template: `<p>di-2 - diWithoutProvidedInService - {{ this.name }}</p>`,
})
export class Di2Component {

    name: string = 'ABC';

    constructor(public diWithoutProvidedInService: DiWithoutProvidedInService) {
        console.log('Di2Component Constructor Invoked.');
        this.name = diWithoutProvidedInService.getName();
    }

}

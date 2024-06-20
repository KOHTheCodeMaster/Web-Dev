import {Component} from '@angular/core';
import {DiWithInjectableService} from "../../../services/dependency-injection/di-with-injectable.service";

@Component({
    selector: 'app-di-3',
    standalone: true,
    imports: [],
    template: `<p>di-3 - diWithInjectableService - {{ this.name }}</p>`
})
export class Di3Component {

    name: string = 'John Doe';

    constructor(public diWithInjectableService: DiWithInjectableService) {
        console.log('Di3Component Constructor Invoked.');
    }

}

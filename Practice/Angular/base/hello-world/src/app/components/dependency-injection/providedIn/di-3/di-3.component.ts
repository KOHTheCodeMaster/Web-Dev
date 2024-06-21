import {Component} from '@angular/core';
import {DIWithInjectableService} from "../../../../services/dependency-injection/di-with-injectable.service";

@Component({
    selector: 'app-di-3',
    standalone: true,
    imports: [],
    template: `<p>di-3 - diWithInjectableService - {{ this.name }}</p>`
})
export class DI3Component {

    name: string = 'John Doe';

    constructor(public diWithInjectableService: DIWithInjectableService) {
        console.log('Di3Component Constructor Invoked.');
    }

}

import {Component} from '@angular/core';
import {DIWithDependencyService} from "../../../../services/dependency-injection/di-with-dependency.service";

@Component({
    selector: 'app-di-4',
    standalone: true,
    imports: [],
    template: `<p>di-4 - DIWithDependencyService - {{ this.name }}</p>`
})
export class DI4Component {

    name: string = 'John Doe';

    constructor(public diWithDependencyService: DIWithDependencyService) {
        console.log('Di4Component Constructor Invoked.');
    }

}

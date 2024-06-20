import {Component} from '@angular/core';
import {DIWithoutInjectableService} from "../../../services/dependency-injection/di-without-injectable.service";

@Component({
    selector: 'app-di-1',
    standalone: true,
    imports: [],
    template: `<p>di-1 - diWithoutInjectableService - {{ this.name }}</p>`
})
export class Di1Component {

    name: string = 'ABC';

    constructor(private diWithoutInjectableService: DIWithoutInjectableService) {
        console.log('Di1Component Constructor Invoked.');
        this.name = diWithoutInjectableService.getName();
    }

}

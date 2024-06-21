import {Component} from '@angular/core';
import {DIWithoutInjectableService} from "../../../../services/dependency-injection/di-without-injectable.service";

@Component({
    selector: 'app-di-providers-1',
    standalone: true,
    imports: [],
    providers: [DIWithoutInjectableService],
    template: `<p>di-providers-1 - DIWithoutInjectableService - {{ this.name }}</p>`
})
export class DiProviders1Component {

    name: string = 'John Doe';

    constructor(public diWithoutInjectableService: DIWithoutInjectableService) {
        console.log('DiProviders1Component Constructor Invoked.');
    }

}

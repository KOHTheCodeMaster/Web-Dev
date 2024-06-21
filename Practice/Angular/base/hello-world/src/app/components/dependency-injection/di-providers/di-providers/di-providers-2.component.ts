import {Component} from '@angular/core';
import {DIWithoutInjectableService} from "../../../../services/dependency-injection/di-without-injectable.service";
import {DIWithoutProvidedInService} from "../../../../services/dependency-injection/di-without-provided-in.service";

@Component({
    selector: 'app-di-providers-2',
    standalone: true,
    imports: [],
    providers: [DIWithoutProvidedInService],
    template: `<p>di-providers-2 - DIWithoutProvidedInService - {{ this.name }}</p>`
})
export class DiProviders2Component {

    name: string = 'John Doe';

    constructor(public diWithoutProvidedInService: DIWithoutProvidedInService) {
        console.log('DiProviders2Component Constructor Invoked.');
    }

}

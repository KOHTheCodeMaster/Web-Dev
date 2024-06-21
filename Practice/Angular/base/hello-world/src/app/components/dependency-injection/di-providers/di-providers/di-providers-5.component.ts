import {Component} from '@angular/core';
import {DIWithDependency2Service} from "../../../../services/dependency-injection/di-with-dependency-2.service";
import {DIWithoutInjectableService} from "../../../../services/dependency-injection/di-without-injectable.service";
import {DIWithoutProvidedInService} from "../../../../services/dependency-injection/di-without-provided-in.service";

@Component({
    selector: 'app-di-providers-5',
    standalone: true,
    imports: [],
    providers: [DIWithDependency2Service, DIWithoutInjectableService, DIWithoutProvidedInService],
    template: `<p>di-providers-5 - DIWithDependency2Service - {{ this.name }}</p>`
})
export class DiProviders5Component {

    name: string = 'John Doe';

    constructor(public diWithDependency2Service: DIWithDependency2Service) {
        console.log('DiProviders5Component Constructor Invoked.');
    }

}

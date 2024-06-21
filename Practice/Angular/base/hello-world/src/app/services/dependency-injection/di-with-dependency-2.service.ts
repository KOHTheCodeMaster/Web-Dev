import {Injectable} from "@angular/core";
import {DIWithoutInjectableService} from "./di-without-injectable.service";
import {DIWithoutProvidedInService} from "./di-without-provided-in.service";

@Injectable({
    providedIn: 'root'
})
export class DIWithDependency2Service {

    constructor(public diWithoutInjectableService: DIWithoutInjectableService,
                public diWithoutProvidedInService: DIWithoutProvidedInService) {
        console.log('DIWithDependency2Service Constructor Invoked.');
    }

}

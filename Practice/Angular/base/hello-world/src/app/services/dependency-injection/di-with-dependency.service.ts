import {Injectable} from "@angular/core";
import {DIWithInjectableService} from "./di-with-injectable.service";

@Injectable({
    providedIn: 'root'
})
export class DIWithDependencyService {

    /*
        constructor(public diWithoutInjectableService: DIWithoutInjectableService) {
            console.log('DiServiceWithDependencyService Constructor Invoked.');
        }
    */

    /*
        constructor(public diWithoutProvidedInService: DIWithoutProvidedInService) {
            console.log('DiServiceWithDependencyService Constructor Invoked.');
        }
    */

    constructor(public diWithInjectableService: DIWithInjectableService) {
        console.log('DiServiceWithDependencyService Constructor Invoked.');
    }

}

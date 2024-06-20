import {Injectable} from "@angular/core";
import {DIWithoutInjectableService} from "./di-without-injectable.service";
import {DiWithoutProvidedInService} from "./di-without-provided-in.service";
import {DiWithInjectableService} from "./di-with-injectable.service";

@Injectable({
    providedIn: 'root'
})
export class DiServiceWithDependencyService {

    /*
        constructor(public dIWithoutInjectableService: DIWithoutInjectableService) {
            console.log('DiServiceWithDependencyService Constructor Invoked.');
        }
    */

    /*
        constructor(public diWithoutProvidedInService: DiWithoutProvidedInService) {
            console.log('DiServiceWithDependencyService Constructor Invoked.');
        }
    */

    constructor(public diWithInjectableService: DiWithInjectableService) {
        console.log('DiServiceWithDependencyService Constructor Invoked.');
    }

}

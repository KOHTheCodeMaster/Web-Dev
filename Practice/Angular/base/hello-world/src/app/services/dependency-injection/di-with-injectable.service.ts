import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DIWithInjectableService {

    constructor() {
        console.log('DIWithInjectableService Constructor Invoked.');
    }

}

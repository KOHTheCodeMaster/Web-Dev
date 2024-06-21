import {Injectable} from "@angular/core";

@Injectable(/*{
    providedIn: 'root'
}*/)
export class DIWithoutProvidedInService {

    constructor() {
        console.log('DIWithoutProvidedInService Constructor Invoked.');
    }

}

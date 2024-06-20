import {Injectable} from "@angular/core";

@Injectable(/*{
    providedIn: 'root'
}*/)
export class DiWithoutProvidedInService {

    constructor() {
        console.log('DiWithoutProvidedInService Constructor Invoked.');
    }

}

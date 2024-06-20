import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})export class DiWithInjectableService {

    constructor() {
        console.log('DiWithInjectableService Constructor Invoked.');
    }

    getName(): string {
        return 'John Doe';
    }
}

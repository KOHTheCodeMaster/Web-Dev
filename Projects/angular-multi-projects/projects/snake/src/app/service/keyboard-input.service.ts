import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class KeyboardInputService {

    private keyPressSubject: Subject<string>;

    constructor() {
        this.keyPressSubject = new Subject<string>();
        this.listenToKeyboard();
    }

    private listenToKeyboard(): void {
        window.addEventListener('keydown', (event) => this.keyPressSubject.next(event.key));
    }

    getKeyPress$(): Observable<string> {
        return this.keyPressSubject.asObservable();
    }

}

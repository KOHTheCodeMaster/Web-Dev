import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ScoreService {

    private currentScore$: BehaviorSubject<number>;
    private highScore$: BehaviorSubject<number>;

    constructor() {
        this.currentScore$ = new BehaviorSubject(0);
        this.highScore$ = new BehaviorSubject(0);
    }

    //  Getters
    //  -------

    getCurrentScore$(): BehaviorSubject<number> {
        return this.currentScore$;
    }

    getHighScore$(): BehaviorSubject<number> {
        return this.highScore$;
    }

}

import {Injectable} from '@angular/core';
import {GameStatus} from "../shared/model/game-status.enum";
import {Level} from "../shared/model/level.enum";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GameStateService {

    private gameStatus$: BehaviorSubject<GameStatus>;
    private level$: BehaviorSubject<Level>;

    constructor() {
        this.gameStatus$ = new BehaviorSubject<GameStatus>(GameStatus.NOT_STARTED);
        this.level$ = new BehaviorSubject<Level>(Level.EASY);
    }

    updateLevel(level: Level) {
        this.level$.next(level);
    }

    updateGameStatus(gameStatus: GameStatus) {
        this.gameStatus$.next(gameStatus);
    }


    //  Getters
    //  -------

    getGameStatus(): Observable<GameStatus> {
        return this.gameStatus$.asObservable();
    }

    getLevel(): BehaviorSubject<Level> {
        return this.level$;
    }

}

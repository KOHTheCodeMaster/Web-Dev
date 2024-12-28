import {Injectable} from '@angular/core';
import {GameStatus} from "../shared/model/game-status.enum";
import {Observable, Subject, Subscription, timer} from "rxjs";
import {GameStateService} from "./game-state.service";
import {Level} from "../shared/model/level.enum";

@Injectable({
    providedIn: 'root'
})
export class TimerService {

    private timer$: Subject<void>;
    private timerSubscription!: Subscription;
    private timerSpeedInMs!: number;

    constructor(private gamerStateService: GameStateService) {

        this.timer$ = new Subject<void>();
        this.initTimerSpeed();

        this.initTimerSubscription();

    }

    initTimerSpeed() {
        this.gamerStateService.getLevel().subscribe(level => {
            if (level === Level.EASY) this.timerSpeedInMs = 400;
            else if (level === Level.MEDIUM) this.timerSpeedInMs = 200;
            else if (level === Level.HARD) this.timerSpeedInMs = 100;
        });
    }

    initTimerSubscription() {
        this.gamerStateService.getGameStatus$().subscribe(gameStatus => {
            if (gameStatus === GameStatus.IN_PROGRESS)
                this.timerSubscription = timer(0, this.timerSpeedInMs).subscribe(() => this.updateTimer());
            else
                this.timerSubscription?.unsubscribe();
        });
    }

    updateTimer() {
        this.timer$.next();
    }


    //  Getters
    //  -------

    getTimer(): Observable<void> {
        return this.timer$.asObservable();
    }

}

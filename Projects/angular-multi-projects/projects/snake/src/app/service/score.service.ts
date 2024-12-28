import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ScoreService {

    private scoreUpdated$!: Subject<void>;
    private currentScore: number;
    private highScore: number;
    private POINTS_PER_FOOD: number;

    constructor() {
        this.currentScore = 0;
        this.highScore = 0;
        this.POINTS_PER_FOOD = 1;

        this.scoreUpdated$ = new Subject<void>();
        this.scoreUpdated$.next();
    }

    updateScores() {
        this.currentScore += this.POINTS_PER_FOOD;
        if (this.currentScore > this.highScore) this.highScore = this.currentScore;

        this.scoreUpdated$.next();
    }

    resetCurrentScore() {
        this.currentScore = 0;
        this.scoreUpdated$.next();
    }

    //  Getters
    //  -------

    getScoreUpdated$(): Subject<void> {
        return this.scoreUpdated$;
    }

    getCurrentScore(): number {
        return this.currentScore;
    }

    getHighScore(): number {
        return this.highScore;
    }

}

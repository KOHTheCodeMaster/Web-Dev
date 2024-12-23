import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {

    private scores = {
        'X': 0,
        'O': 0,
        'Tie': 0
    };

    updateScore(winner: string) {
        if (winner === 'X') this.scores['X']++;
        else if (winner === 'O') this.scores['O']++;
        else if (winner === 'Tie') this.scores['Tie']++;
        else console.error('Invalid winner: ' + winner);
    }

    resetScore() {

        this.scores['X'] = 0;
        this.scores['O'] = 0;
        this.scores['Tie'] = 0;

    }

}

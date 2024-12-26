import {Component} from '@angular/core';
import {GameStateService} from "../../../service/game-state.service";
import {GameStatus} from "../../../shared/model/game-status.enum";

@Component({
    selector: 'app-loading-screen',
    standalone: true,
    imports: [],
    templateUrl: './loading-screen.component.html',
    styleUrl: './loading-screen.component.css'
})
export class LoadingScreenComponent {

    strLoadingText!: string;

    constructor(private gameStateService: GameStateService) {

        this.gameStateService.getGameStatus().subscribe(gameStatus => {
            if (gameStatus === GameStatus.LOADING) {
                this.resetLoading();
            }
        });

    }

    resetLoading() {

        //  Update loading text every 1 second as: '3', '2', '1', 'GO!'
        let count = 3;
        this.strLoadingText = count.toString();
        count--;

        let interval = setInterval(() => {
            if (count === 0) {

                this.strLoadingText = 'GO!';
                clearInterval(interval);

                //  Update game status to IN_PROGRESS after 1 second
                setTimeout(() => {
                    this.gameStateService.updateGameStatus(GameStatus.IN_PROGRESS);
                }, 1000);

            } else {
                this.strLoadingText = count.toString();
                count--;
            }
        }, 1000);

    }

}

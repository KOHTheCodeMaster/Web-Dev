import {Component} from '@angular/core';
import {GameStateService} from "../../../../services/game-state.service";

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [],
    templateUrl: './settings.component.html',
})
export class SettingsComponent {

    constructor(public gameStateService: GameStateService) {
    }

    onRestartBtnClick() {
        this.gameStateService.restartGame();
    }

    onResetBtnClick() {
        this.gameStateService.resetGame();
    }

}

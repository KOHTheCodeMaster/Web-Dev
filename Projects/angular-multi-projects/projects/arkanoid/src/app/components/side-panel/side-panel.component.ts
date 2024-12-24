import {Component} from '@angular/core';
import {ScoreComponent} from "./score/score.component";
import {SettingsComponent} from "./settings/settings.component";
import {PlayerLivesComponent} from "./player-lives/player-lives.component";

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [
    ScoreComponent,
    SettingsComponent,
    PlayerLivesComponent
  ],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent {

}

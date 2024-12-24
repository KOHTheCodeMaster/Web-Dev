import {Component} from '@angular/core';
import {SidePanelComponent} from "./components/side-panel/side-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [SidePanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arkanoid';
}

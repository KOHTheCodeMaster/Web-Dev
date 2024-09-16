import {Component} from '@angular/core';
import {DemoGoogleHomePageComponent} from "./google-home-page/demo-google-home-page.component";
import {DemoHtmlFundamentalsComponent} from "./demo-html-fundamentals/demo-html-fundamentals.component";

@Component({
  selector: 'app-demo-google',
  standalone: true,
    imports: [
        DemoGoogleHomePageComponent,
        DemoHtmlFundamentalsComponent
    ],
  templateUrl: './demo-google.component.html',
  styleUrl: './demo-google.component.css'
})
export class DemoGoogleComponent {

}

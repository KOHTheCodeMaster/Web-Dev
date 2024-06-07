import { Component } from '@angular/core';
import { Comp1Component } from './components/comp1/comp1.component';
import { InlineTemplateComponent } from './components/inline-template/inline-template.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component, InlineTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}

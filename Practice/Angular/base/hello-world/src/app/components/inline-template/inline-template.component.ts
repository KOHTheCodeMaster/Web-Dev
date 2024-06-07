import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  standalone: true,
  imports: [],
//   templateUrl: './inline-template.component.html',
//   styleUrl: './inline-template.component.css'
  template: `
          <div>
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
          </div>
  `,
  styles: [`
          h2 {
            color: cyan;
          }
          p {
            font-size: 16px;
          }
  `]
})
export class InlineTemplateComponent {
    title = 'Inline Template Component';
    description = 'This is an inline template component.';
}

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';   // Import FormsModule

@Component({
    selector: 'app-demo-ng-model',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './demo-ng-model.component.html',
    styleUrl: './demo-ng-model.component.css'
})
export class DemoNgModelComponent {
    name: string = 'John Doe';
}

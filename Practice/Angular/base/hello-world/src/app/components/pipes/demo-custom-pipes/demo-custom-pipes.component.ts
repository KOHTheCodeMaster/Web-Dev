import {Component} from '@angular/core';
import {AppendTextPipe} from "./append-text.pipe";
import {ReverseStringPipe} from "./reverse-string.pipe";

// import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-demo-custom-pipes',
    standalone: true,
    imports: [ReverseStringPipe, AppendTextPipe],
    // imports: [CommonModule],
    templateUrl: './demo-custom-pipes.component.html',
})
export class DemoCustomPipesComponent {

    text: string = 'John Doe';

}

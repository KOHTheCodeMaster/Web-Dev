import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {AppendTextPipe} from "./append-text.pipe";
import {ReverseStringPipe} from "./reverse-string.pipe";
import {ExponentialPipe} from "./exponential.pipe";
import {FilterPipe} from "./filter.pipe";

@Component({
    selector: 'app-demo-custom-pipes',
    standalone: true,
    imports: [FormsModule, NgFor, ReverseStringPipe, AppendTextPipe, ExponentialPipe, FilterPipe],
    // imports: [CommonModule],
    templateUrl: './demo-custom-pipes.component.html',
})
export class DemoCustomPipesComponent {

    name: string = 'John Doe';
    searchText: string = '';
    items: string[] = ['Mobile', 'Laptop', 'PC'];

}

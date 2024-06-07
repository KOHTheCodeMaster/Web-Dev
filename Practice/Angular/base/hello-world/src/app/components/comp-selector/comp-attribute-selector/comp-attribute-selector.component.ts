import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-attribute-selector',
  standalone: true,
  imports: [],
  templateUrl: './comp-attribute-selector.component.html',
  styleUrl: './comp-attribute-selector.component.css'
})
export class CompAttributeSelectorComponent {

  @Input('comp-attribute-selector') num: number = 10;
  name: string;

  constructor() {
    //  To-do - Constructor is not invoked. Check why control is not reaching here & Attribute Selector Component is not working?
    console.log('Constructor - CompAttributeSelectorComponent Invoked.');
    this.name = this.num == 10 ? 'John' : 'Doe';
  }
}

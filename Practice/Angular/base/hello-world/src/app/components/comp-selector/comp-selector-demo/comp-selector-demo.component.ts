import { Component } from '@angular/core';
import { CompElementSelectorComponent } from '../comp-element-selector/comp-element-selector.component';
import { CompAttributeSelectorComponent } from '../comp-attribute-selector/comp-attribute-selector.component';
import { CompClassSelectorComponent } from '../comp-class-selector/comp-class-selector.component';

@Component({
  selector: 'app-comp-selector-demo',
  standalone: true,
  imports: [CompElementSelectorComponent, CompAttributeSelectorComponent, CompClassSelectorComponent],
  templateUrl: './comp-selector-demo.component.html',
  styleUrl: './comp-selector-demo.component.css'
})
export class CompSelectorDemoComponent {

  constructor() {
    console.log('Constructor - CompSelectorDemoComponent Invoked.');
  }
}

import {Component, ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';
import { InlineTemplateComponent } from './components/inline-template/inline-template.component';
import { CompSelectorDemoComponent } from './components/comp-selector/comp-selector-demo/comp-selector-demo.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StyleScopingDemoComponent } from './components/style-scoping/style-scoping-demo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, Comp1Component, InlineTemplateComponent, CompSelectorDemoComponent, DataBindingComponent,
        StyleScopingDemoComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'hello-world';
}

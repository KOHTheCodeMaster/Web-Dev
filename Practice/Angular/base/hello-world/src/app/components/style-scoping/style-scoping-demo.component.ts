import {Component, ViewEncapsulation} from '@angular/core';
import {EmulatedComponent} from './emulated/emulated.component';
import {ShadowDomComponent} from './shadow-dom/shadow-dom.component';
import {NoneComponent} from './none/none.component';

@Component({
    selector: 'app-style-scoping-demo',
    standalone: true,
    imports: [EmulatedComponent, ShadowDomComponent, NoneComponent],
    templateUrl: './style-scoping-demo.component.html',
    styleUrl: './style-scoping-demo.component.css',
    encapsulation: ViewEncapsulation.None    // This makes .global-style-button-2 a global style

})
export class StyleScopingDemoComponent {

}

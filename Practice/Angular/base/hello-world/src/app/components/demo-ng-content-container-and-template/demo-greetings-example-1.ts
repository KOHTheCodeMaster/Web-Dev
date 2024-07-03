import {Component, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-demo-greetings-example-1',
    standalone: true,
    imports: [CommonModule],
    template: `
        <ng-template #greetingTemplate let-name let-location="location">
            <div>
                <h1>Hola {{ name }}..!!</h1>
                <p>Welcome to {{ location }} ^-^</p>
            </div>
        </ng-template>

        <ng-container *ngTemplateOutlet="greetingTemplate; context: { $implicit: 'John', location: 'Tokyo' }">
        </ng-container>
    `
})
export class DemoGreetingsExample1 {

    @ViewChild('greetingTemplate', {read: TemplateRef}) greetingTemplate!: TemplateRef<any>;

}

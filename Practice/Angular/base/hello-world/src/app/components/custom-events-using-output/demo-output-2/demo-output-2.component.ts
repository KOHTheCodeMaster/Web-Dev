import {Component} from '@angular/core';
import {
    EventEmitterVsOutputFunctionComponent
} from "./event-emitter-vs-output-function-component/event-emitter-vs-output-function.component";

@Component({
    imports: [EventEmitterVsOutputFunctionComponent],
    selector: 'app-demo-output-2',
    standalone: true,
    templateUrl: './demo-output-2.component.html',
})
export class DemoOutput2Component {
    handleEvent1(event: any) {
        console.log('Handled Event 1:', event);
    }

    handleEvent2() {
        console.log('Handled Event 2');
    }

    handleEvent4(event: any) {
        console.log('Handled Event 4:', event);
    }

    handleEvent5(event: number) {
        console.log('Handled Event 5:', event);
    }

    handleEvent6() {
        // console.log('Handled Event 6:', event);  //  ToDo: Understand scope of this event variable & how is it accessible?
        console.log('Handled Event 6');
    }

    handleEvent7() {
        console.log('Handled Event 7');
    }

    handleEvent9() {
        console.log('Handled Event 9');
    }

    handleEvent10(event: number) {
        console.log('Handled Event 10:', event);
    }
}

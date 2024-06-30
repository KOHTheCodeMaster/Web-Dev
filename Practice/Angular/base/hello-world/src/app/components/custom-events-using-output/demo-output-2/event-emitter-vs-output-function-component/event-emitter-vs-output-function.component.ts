import {Component, EventEmitter, Output, output, OutputEmitterRef} from '@angular/core';

@Component({
    selector: 'app-event-emitter-vs-output-function',
    standalone: true,
    template: `
        <button (click)="emitEvent1()">Emit Event 1</button>
        <button (click)="emitEvent2()">Emit Event 2</button>
        <!-- <button (click)="emitEvent3()">Emit Event 3</button> -->
        <button (click)="emitEvent4()">Emit Event 4</button>
        <button (click)="emitEvent5()">Emit Event 5</button>
        <button (click)="emitEvent6()">Emit Event 6</button>
        <button (click)="emitEvent7()">Emit Event 7</button>
        <!-- <button (click)="emitEvent8()">Emit Event 8</button> -->
        <button (click)="emitEvent9()">Emit Event 9</button>
        <button (click)="emitEvent10()">Emit Event 10</button>
    `
})
export class EventEmitterVsOutputFunctionComponent {
    @Output() customEvent1 = new EventEmitter();
    @Output() customEvent2 = new EventEmitter<void>();
    @Output() customEvent4: EventEmitter<any> = new EventEmitter();
    @Output() customEvent5: EventEmitter<number> = new EventEmitter();

    customEvent6 = output();
    customEvent7 = output<void>();
    customEvent9: OutputEmitterRef<void> = output();
    customEvent10: OutputEmitterRef<number> = output();

    emitEvent1() {
        this.customEvent1.emit({message: 'Event 1 emitted'});
    }

    emitEvent2() {
        this.customEvent2.emit();
    }

    emitEvent4() {
        this.customEvent4.emit({message: 'Event 4 emitted'});
    }

    emitEvent5() {
        this.customEvent5.emit(17);
    }

    emitEvent6() {
        this.customEvent6.emit();
    }

    emitEvent7() {
        this.customEvent7.emit();
    }

    emitEvent9() {
        this.customEvent9.emit();
    }

    emitEvent10() {
        this.customEvent10.emit(98);
    }
}

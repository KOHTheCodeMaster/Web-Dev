import {Component} from '@angular/core';

@Component({
    selector: 'app-demo-event-filtering',
    standalone: true,
    template: `
        <div>
            <div (click)="onParentDivClick($event)">
                <button (click)="onButtonClick($event)">Click</button>
                <p>{{ strBtnClicked }}</p>
                <p>{{ strParentDivClicked }}</p>
            </div>
            <div>
                <input [value]="strKeyPressed" (keydown)="onKeyDown($event)" (keyup.enter)="onEnterKey()"
                       placeholder="Press any key..."/>
                <p>{{ strKeyMsg }}</p>
                <span>{{ strEnterKeyPressed }}</span>
            </div>
            <div>
                <br>
                <button (click)="onResetButtonClick($event)">Reset</button>
            </div>
        </div>
    `
})
export class DemoEventFilteringComponent {

    strBtnClicked: string = '-';
    strEnterKeyPressed: string = '-';
    strParentDivClicked: string = '-';
    strKeyMsg: string = '-';
    strKeyPressed: string = '-';

    onButtonClick(event: Event) {
        this.strBtnClicked = 'Reset Button clicked.';
        console.log(this.strBtnClicked + ' -> ' + event);

        event.stopPropagation();    // Prevents the event from bubbling up to the parent
    }

    onResetButtonClick(event: Event) {
        this.strBtnClicked = 'Reset Button clicked.';
        console.log(this.strBtnClicked + ' -> ' + event);

        this.strBtnClicked = '-';
        this.strEnterKeyPressed = '-';
        this.strParentDivClicked = '-';
        this.strKeyMsg = '-';
        this.strEnterKeyPressed = '-';
        this.strKeyPressed = '-';
    }

    onEnterKey() {
        this.strEnterKeyPressed = 'Enter key was pressed.';
        console.log(this.strEnterKeyPressed);
    }

    onParentDivClick(event: MouseEvent) {
        this.strParentDivClicked = 'Parent Div clicked.';
        console.log(this.strParentDivClicked + ' -> ' + event);
    }

    onKeyDown(event: KeyboardEvent) {
        this.strKeyPressed = event.key;
        this.strKeyMsg = 'Key pressed: ' + event.key;
        console.log(this.strKeyMsg);
    }

}

import {Component} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
    selector: 'app-ng-class-and-style',
    standalone: true,
    imports: [NgClass, NgStyle],
    templateUrl: './ng-class-and-style.component.html',
    styleUrl: './ng-class-and-style.component.css'
})
export class NgClassAndStyleComponent {

    isActive: boolean = true;
    isHighlighted: boolean = false;
    fontSize: number = 14;

    toggleClass() {
        this.isActive = !this.isActive;
    }

    toggleHighlight() {
        this.isHighlighted = !this.isHighlighted;
    }

    increaseFontSize() {
        this.fontSize += 2;
    }
}

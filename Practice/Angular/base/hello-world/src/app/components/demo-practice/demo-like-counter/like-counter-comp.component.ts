import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-like-counter-comp',
    standalone: true,
    imports: [NgClass],
    template: `
        <div>
            <button (click)="handleLikeBtnClick()"
                    [ngClass]="{'active': isLiked, 'inactive': !isLiked}">
                Like
            </button>
            <p>{{ likesCount }}</p>
        </div>
    `,
    styleUrl: 'like-counter-comp.component.css',
})
export class LikeCounterCompComponent {

    @Input() isLiked: boolean = false;
    @Input() likesCount: number = 0;

    handleLikeBtnClick() {
        this.isLiked = !this.isLiked;
        this.likesCount += this.isLiked ? 1 : -1;
    }

}

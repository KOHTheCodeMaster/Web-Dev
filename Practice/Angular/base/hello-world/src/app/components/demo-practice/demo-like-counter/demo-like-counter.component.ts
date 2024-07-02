import {Component} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {LikeCounterCompComponent} from "./like-counter-comp.component";

@Component({
    selector: 'app-demo-like-counter',
    standalone: true,
    imports: [NgClass, NgStyle, LikeCounterCompComponent],
    templateUrl: './demo-like-counter.component.html',
})
export class DemoLikeCounterComponent {

    samplePostData = {
        body: '...',
        isLiked: false,
        likesCount: 10
    }

}

import {Component} from '@angular/core';

@Component({
    selector: 'app-poster',
    standalone: true,
    imports: [],
    templateUrl: './poster.component.html',
    styleUrl: './poster.component.css'
})
export class PosterComponent {

    handlePosterClick(posterNumber: number) {

        switch (posterNumber) {
            case 1:
                console.log('Poster 1 clicked');
                break;
            case 2:
                console.log('Poster 2 clicked');
                break;
            case 3:
                console.log('Poster 3 clicked');
                break;
            case 4:
                console.log('Poster 4 clicked');
                break;

            default:
                console.error('Poster not found');
                break;
        }

    }
}

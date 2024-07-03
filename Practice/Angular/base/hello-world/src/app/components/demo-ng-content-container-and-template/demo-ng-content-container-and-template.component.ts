import {Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
    imports: [NgTemplateOutlet],
    selector: 'app-demo-ng-content-container-and-template',
    standalone: true,
    template: `
        <ng-template #foodHeader let-cafeName let-city="city">
            <div>
                <h2>Cafe Name -> {{ cafeName }}</h2>
                <p>City -> {{ city }}</p>
            </div>
        </ng-template>

        <ng-template #foodTemplate let-food="food">
            <div>
                <h2>{{ food.name }}</h2>
                <p>{{ food.description }}</p>
            </div>
        </ng-template>

        <ng-container *ngTemplateOutlet="foodHeader; context: { $implicit: cafeName, city: city }"></ng-container>

        <button (click)="addFood()">Add Food Item</button>
        <div #container></div>
    `
})
export class DemoNgContentContainerAndTemplateComponent {

    @ViewChild('foodTemplate', {read: TemplateRef}) foodTemplate!: TemplateRef<any>;
    @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

    cafeName: string = 'The Old Cafe';
    city: string = 'Tokyo';

    foods = [
        {name: 'Pizza', description: 'Cheesy and delicious'},
        {name: 'Pasta', description: 'Rich and creamy'}
    ];

    addFood() {
        this.foods.forEach((food, index) => {
            this.container.createEmbeddedView(this.foodTemplate, {food, index});
        });
    }

}

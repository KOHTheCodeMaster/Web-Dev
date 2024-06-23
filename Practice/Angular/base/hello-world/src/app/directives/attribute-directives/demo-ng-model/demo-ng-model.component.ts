import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms'; // Import FormsModule

@Component({
    selector: 'app-demo-ng-model',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './demo-ng-model.component.html',
    styleUrl: './demo-ng-model.component.css'
})
export class DemoNgModelComponent {

    name1: string = 'John Doe';
    name2: string = 'John Doe';
    age1: number = 1;

    updateName2(name: any) {
        console.log('name: ' + name + ' | ' + 'this.name2: ' + this.name2);
        this.name2 = name + ' ! ';  //  Added ' ! ' text to visually see the difference.
    }

    public updateName2ToABC(): void {
        this.name2 += 'ABC...';
    }

}

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-data-binding',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './data-binding.component.html',
    styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

    name: string = "John Doe";
    age: number = 17;
    disableAgePlus: boolean = false;
    disableAgeMinus: boolean = false;

    isActive: boolean = true;
    color: string = 'green';


    incrementAge() {
        this.age++;
        if (this.age == 18) this.disableAgePlus = true;
        if (this.age < 18) this.disableAgeMinus = false;
    }

    decrementAge() {
        this.age--;
        if (this.age == 13) this.disableAgeMinus = true;
        if (this.age > 13) this.disableAgePlus = false;
    }

    getAge(): number {
        return this.age;
    }

}

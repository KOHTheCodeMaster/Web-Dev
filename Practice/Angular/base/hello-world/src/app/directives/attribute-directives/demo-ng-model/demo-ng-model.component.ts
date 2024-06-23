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
    name3: string = 'John Doe';
    name4: string = 'John Doe';
    firstName5: string = 'John Doe';
    lastName5: string = 'John Doe';
    age1: number = 1;

    onChangeName2(name: string) {
        console.log('name: ' + name + ' | ' + 'this.name2: ' + this.name2);
        //  This method has higher precedence than automatic data change binding of [(ngModel)],
        //  If data is not changed here, by default [(ngModel)] will automatically update the field via two-way binding behavior
        //  If data (which is bound by ngModel, name2 in this case) is changed in this method,
        //      the default two-way binding behavior of [(ngModel)] would be overridden by this method changes,
        //      logic to update the field manually with the input value needs to be handled carefully
        // this.name2 = name + ' ! ';  //  Added ' ! ' text to visually see the difference.
    }

    onChangeName3(name: string) {
        console.log('onChangeName3 invoked - name: ' + name + ' | ' + 'this.name3: ' + this.name3);
        // this.name3 = name;
    }

    updateName4(name: string) {
        this.name4 = name;
    }

    updateFirstName5(name: string) {
        this.firstName5 = name;
    }
}

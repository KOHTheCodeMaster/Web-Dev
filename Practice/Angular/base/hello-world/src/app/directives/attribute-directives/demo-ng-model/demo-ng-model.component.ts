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
    firstName5: string = 'John';
    lastName5: string = 'Doe';
    name6: string = 'John Doe';

    onChangeName2(name: string) {
        console.log('onChangeName2() invoked - name: ' + name + ' | ' + 'this.name2: ' + this.name2);
    }

    onChangeName3(name: string) {
        console.log('onChangeName3() invoked - name: ' + name + ' | ' + 'this.name3: ' + this.name3);
    }

    updateName4(name: string) {
        console.log('updateName4() invoked - name: ' + name + ' | ' + 'this.name4: ' + this.name4);
        this.name4 = name;
    }

    updateFirstName5(name: string) {
        console.log('updateFirstName5() invoked - name: ' + name + ' | ' + 'this.firstName5: ' + this.firstName5);
        this.firstName5 = name;
    }

    updateName6(name: any) {
        console.log('updateName6() method will never be invoked.\n' +
            '`(ngModelChange)` without `[ngModel]` or `[(ngModel)]` - Invalid & not allowed')
        this.name6 = name;
    }

}

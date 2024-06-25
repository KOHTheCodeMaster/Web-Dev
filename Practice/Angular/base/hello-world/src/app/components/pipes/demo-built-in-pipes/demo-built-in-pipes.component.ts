import {Component} from '@angular/core';
import {
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    JsonPipe,
    LowerCasePipe,
    PercentPipe,
    UpperCasePipe
} from '@angular/common';

// import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-demo-built-in-pipes',
    standalone: true,
    imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe],
    // imports: [CommonModule],
    templateUrl: './demo-built-in-pipes.component.html',
})
export class DemoBuiltInPipesComponent {

    today: Date = new Date();
    textValue: string = 'Hola..!!';
    amount: number = 1234.56;
    decimalValue1: number = 1234.56;
    decimalValue2: number = 0.5;
    data: any = {name: 'John Doe', age: 26, city: 'New York'};

}

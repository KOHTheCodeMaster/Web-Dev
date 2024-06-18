import {Component} from '@angular/core';
import {NgFor, NgStyle} from '@angular/common';
import {Transaction} from '../../../interfaces/Transaction';

@Component({
    selector: 'app-demo-ng-for',
    standalone: true,
    imports: [NgFor, NgStyle],
    templateUrl: './demo-ng-for.component.html',
    styleUrl: './demo-ng-for.component.css'
})
export class DemoNgForComponent {

    transactions: Transaction[] = [
        {id: 1, date: '2024-06-11', description: 'Payment 1', amount: 100},
        {id: 2, date: '2024-06-12', description: 'Payment 2', amount: 150},
        {id: 3, date: '2024-06-13', description: 'Payment 3', amount: 200}
    ];

    trackByTransactionId(index: number, transaction: Transaction): number {
        return transaction.id;
    }

    refreshTransactions() {
        // Re-initialize the transactions list
        this.transactions = [
            {id: 1, date: '2024-06-11', description: 'Payment 1', amount: 100},
            {id: 2, date: '2024-06-12', description: 'Payment 2', amount: 150},
            {id: 3, date: '2024-06-13', description: 'Payment 3', amount: 200},
            {id: 4, date: '2024-06-14', description: 'Payment 4', amount: 120},
            {id: 5, date: '2024-06-15', description: 'Payment 5', amount: 180}
        ];
    }

    removeTransaction(index: number) {
        this.transactions.splice(index, 1);
    }
}

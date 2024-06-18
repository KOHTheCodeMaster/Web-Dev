import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {DemoTransactionService} from '../../../services/demo-injectable-service/demo-transaction.service';
import {Transaction} from "../../../interfaces/Transaction";

@Component({
    selector: 'app-demo-transaction',
    standalone: true,
    imports: [NgFor],
    templateUrl: './demo-transaction.component.html',
    styleUrl: './demo-transaction.component.css'
})
export class DemoTransactionComponent {

    constructor(public transactionService: DemoTransactionService) {
    }

    trackByTransactionId(index: number, transaction: Transaction): number {
        return transaction.id;
    }

    addTransaction(): void {
        let newId: number = this.transactionService.getTransactions().length + 1;
        const newTransaction: Transaction = {
            id: newId,
            date: new Date().toISOString().split('T')[0],
            amount: Math.floor(Math.random() * 1000),
            description: 'Payment ' + newId,
        };

        this.transactionService.addTransaction(newTransaction);
    }

    resetTransactions() {
        this.transactionService.resetTransactions();
    }
}

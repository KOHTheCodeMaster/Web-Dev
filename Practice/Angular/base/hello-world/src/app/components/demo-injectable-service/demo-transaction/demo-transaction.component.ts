import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {DemoTransactionService} from '../../../services/demo-injectable-service/demo-transaction.service';
import {Transaction} from "../../../interfaces/Transaction";
import {LoggerService} from '../../../services/demo-injectable-service/logger.service';

@Component({
    selector: 'app-demo-transaction',
    standalone: true,
    imports: [NgFor],
    // providers: [{provide: DemoTransactionService, useClass: DemoTransactionService}],
    providers: [DemoTransactionService],
    templateUrl: './demo-transaction.component.html',
    styleUrl: './demo-transaction.component.css'
})
export class DemoTransactionComponent {

    constructor(public transactionService: DemoTransactionService) {
        console.log('DemoTransactionComponent Constructor Invoked.');
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

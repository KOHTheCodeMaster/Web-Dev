import {Injectable} from '@angular/core';
import {Transaction} from "../../interfaces/Transaction";
import {LoggerService} from "./logger.service";

@Injectable({
    providedIn: 'root'
})
export class DemoTransactionService {

    private transactions: Transaction[];

    constructor(private logger: LoggerService) {
        this.transactions = this.stubTransactionsWithDummyData();
    }

    stubTransactionsWithDummyData(): Transaction[] {
        let transactionList: Transaction[] = [
            {id: 1, date: '2024-06-11', description: 'Payment 1', amount: 100},
            {id: 2, date: '2024-06-12', description: 'Payment 2', amount: 150},
            {id: 3, date: '2024-06-13', description: 'Payment 3', amount: 200}
        ];

        this.logger.log('stubTransactionsWithDummyData(): transactionList.length: ' + transactionList.length);
        return transactionList;
    }

    addTransaction(newTransaction: Transaction): void {
        this.transactions.push(newTransaction);
        this.logger.log(`Transaction Added: ${newTransaction.amount} on ${newTransaction.date}`);
    }

    resetTransactions(): void {
        this.transactions = this.stubTransactionsWithDummyData();
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }

}

/*

Time Stamp: 14th Jul. 2K24 - 11:09 AM..!!

Title: Asynchronous Data

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/

import {Observable, Observer, Subscriber, Subscription} from 'rxjs';

main();

function main() {

    demoSynchronousObservable1();

    // demoSynchronousObservable2();

}

function demoSynchronousObservable1() {

    // Define an observer
    const observer1: Observer<number> = {
        next: (value: number) => console.log('Value: ', value),
        error: (err: any) => console.error('Error: ', err),
        complete: () => console.log('Observer 1 Completed successfully!')
    };

    const observable1: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
        console.log('\nObservable1 starts.');

        subscriber.next(1);
        console.log('Observable1 next 1 invoked.');

        subscriber.error();
        console.log('Observable1 error invoked.');

        subscriber.next(2);
        console.log('Observable1 next 2 invoked.');

        subscriber.complete();
        console.log('Observable1 complete invoked.');

        console.log('Observable1 ends.\n\n');
    });

    const observable2: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
        subscriber.next(1);
        subscriber.error();
        subscriber.next(2);
        subscriber.complete();
    });

    const observable3: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
        subscriber.next(3);
        subscriber.error();
        subscriber.next(4);
        subscriber.complete();
    });

    // let subscription: Subscription = observable1.subscribe(observer1);
    // console.log('subscription: ' + subscription);
    observable1.subscribe(observer1);

    console.log('Line Break Not Working...\n\n - 1')
    observable2.subscribe(observer1);
    console.log('Line Break Not Working...\n\n - 2')
    observable3.subscribe(observer1);
    console.log('Line Break Not Working...\n\n - 3')

}

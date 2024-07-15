/*

Time Stamp: 14th Jul. 2K24 - 11:09 AM..!!

Title: Demo Observables & Observers

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/

import {Observable, Observer, Subscriber} from 'rxjs';

main();

function main() {

    // demoSynchronousObservable1();

    // demoSynchronousObservable2();

    demoSynchronousObservable3();

}

function demoSynchronousObservable1() {

    // Define an observer
    const observer1: Observer<number> = {
        next: (value: number) => console.log('Value: ', value),
        error: (err: any) => console.error('Error: ', err),
        complete: () => console.log('observer1 Completed Successfully!')
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

function demoSynchronousObservable2() {

    // Define an observer
    const sequenceObserver: Observer<number> = {
        next: (value: number) => console.log('Value: ', value),
        error: (err: any) => console.error('Error: ', err),
        complete: () => console.log('sequenceObserver Completed Successfully!')
    };

    const sequenceSubscriberFunction = (observer: Observer<number>) => {
        // Synchronously deliver 1, 2, 3 and then complete
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    };

    const observable1: Observable<number> = new Observable<number>(sequenceSubscriberFunction);

    const observable2: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
        // Synchronously deliver 4, 5, 6 and then complete
        subscriber.next(10);
        subscriber.next(20);
        subscriber.next(30);
        subscriber.complete();
    });

    // let subscription: Subscription = observable1.subscribe(sequenceObserver);
    // console.log('subscription: ' + subscription);
    console.log('observable1 starts.');
    observable1.subscribe(sequenceObserver);

    console.log('observable2 starts.');
    observable2.subscribe(sequenceObserver);

}

function demoSynchronousObservable3() {

    // Define an observer
    const sequenceObserver: Observer<number> = {
        next: (value: number) => console.log('Value: ', value),
        error: (err: any) => console.error('Error: ', err),
        complete: () => console.log('sequenceObserver Completed Successfully!')
    };

    /*
        // Define a subscriber
        const sequenceObserver2: Subscriber<number> = {
            next: (value: number) => console.log('Value: ', value),
            error: (err: any) => console.error('Error: ', err),
            complete: () => console.log('Observer 1 Completed Successfully!')
        };
    */

    const sequenceSubscriber = (observer: Observer<number>) => {
        // Synchronously deliver 1, 2, 3 and then complete
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    };

    const sequenceSubscriber2 = (subscriber: Subscriber<number>) => {
        // Synchronously deliver 1, 2, 3 and then complete.
        subscriber.next(4);
        subscriber.next(5);
        subscriber.next(6);
        subscriber.complete();
    };

    const observable1: Observable<number> = new Observable<number>(sequenceSubscriber);
    const observable2: Observable<number> = new Observable<number>(sequenceSubscriber2);

    const observable3: Observable<number> = new Observable<number>((observer: Observer<number>) => {
        observer.next(10);
        observer.next(20);
        observer.next(30);
        observer.complete();
    });

    const observable4: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
        subscriber.next(101);
        subscriber.next(201);
        subscriber.next(301);
        subscriber.complete();
    });

    console.log('observable1 starts.');
    observable1.subscribe(sequenceObserver);

    console.log('observable2 starts.');
    observable2.subscribe(sequenceObserver);

    console.log('observable3 starts.');
    observable3.subscribe(sequenceObserver);

    console.log('observable4 starts.');
    observable4.subscribe(sequenceObserver);

}

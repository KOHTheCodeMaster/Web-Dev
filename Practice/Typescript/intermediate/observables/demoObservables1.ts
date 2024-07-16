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

    demoSynchronousObservable2();

}

function demoSynchronousObservable1() {

    // Define an observer
    const observer1: Observer<number> = {
        next: (value: number) => console.log('Value: ', value),
        error: (err: any) => console.error('Error: ', err),
        complete: () => console.log('observer1 Completed Successfully!')
    };

    const sequenceSubscriberFunction = (observer: Observer<number>) => {
        console.log('\nobservable1 begins.');

        observer.next(1); //  observable1 next 1 invoked.
        observer.next(2); //  observable1 next 2 invoked.

        //  error halts execution of the observable instance and unsubscribes.
        observer.error('observable1 error invoked.');

        //  observer next(3) won't be invoked since error halted the execution flow.
        observer.next(3);

        //  observer complete() won't be invoked since error halted the execution flow.
        observer.complete();

        console.log('observable1 ends.\n');
    };

    const observable1: Observable<number> = new Observable<number>(sequenceSubscriberFunction);


    //  Using Anonymous sequence subscriber function
    const observable2: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
        console.log('observable2 begins.');

        // Synchronously deliver 4, 5, 6 and then complete
        subscriber.next(4);
        subscriber.next(5);
        subscriber.next(6);
        subscriber.complete();

        //  Once complete() is invoked, Do not expect next or error or complete to be called again.
        subscriber.next(7);
        subscriber.error();
        subscriber.complete();
        console.log('observable2 ends.\n');

    });

    observable1.subscribe(observer1);
    observable2.subscribe(observer1);

}

function demoSynchronousObservable2() {

    //  ToDo: Need to understand the difference between the 4 scenarios mentioned below

    // Define an observer
    const observer: Observer<number> = {
        next: (value: number) => console.log('Value: ', value),
        error: (err: any) => console.error('Error: ', err),
        complete: () => console.log('observer Completed Successfully!')
    };

    /*
        // Define a subscriber
        const sequenceObserver2: Subscriber<number> = {
            next: (value: number) => console.log('Value: ', value),
            error: (err: any) => console.error('Error: ', err),
            complete: () => console.log('Observer 1 Completed Successfully!')
        };
    */

    const sequenceSubscriberFunction1 = (observer: Observer<number>) => {
        // Synchronously deliver 1, 2, 3 and then complete
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    };

    const sequenceSubscriberFunction2 = (subscriber: Subscriber<number>) => {
        // Synchronously deliver 1, 2, 3 and then complete.
        subscriber.next(4);
        subscriber.next(5);
        subscriber.next(6);
        subscriber.complete();
    };

    const observable1: Observable<number> = new Observable<number>(sequenceSubscriberFunction1);
    const observable2: Observable<number> = new Observable<number>(sequenceSubscriberFunction2);

    //  Using Anonymous sequence subscriber function with `Observer` as args
    const observable3: Observable<number> = new Observable<number>((observer: Observer<number>) => {
        observer.next(10);
        observer.next(20);
        observer.next(30);
        observer.complete();
    });

    //  Using Anonymous sequence subscriber function with `Subscriber` as args
    const observable4: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
        subscriber.next(101);
        subscriber.next(201);
        subscriber.next(301);
        subscriber.complete();
    });

    console.log('observable1 begins.');
    observable1.subscribe(observer);

    console.log('observable2 begins.');
    observable2.subscribe(observer);

    console.log('observable3 begins.');
    observable3.subscribe(observer);

    console.log('observable4 begins.');
    observable4.subscribe(observer);

}

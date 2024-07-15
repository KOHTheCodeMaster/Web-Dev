"use strict";
/*

Time Stamp: 14th Jul. 2K24 - 11:09 AM..!!

Title: Demo Observables & Observers

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
main();
function main() {
    // demoSynchronousObservable1();
    // demoSynchronousObservable2();
    demoSynchronousObservable3();
}
function demoSynchronousObservable1() {
    // Define an observer
    var observer1 = {
        next: function (value) { return console.log('Value: ', value); },
        error: function (err) { return console.error('Error: ', err); },
        complete: function () { return console.log('observer1 Completed Successfully!'); }
    };
    var observable1 = new rxjs_1.Observable(function (subscriber) {
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
    var observable2 = new rxjs_1.Observable(function (subscriber) {
        subscriber.next(1);
        subscriber.error();
        subscriber.next(2);
        subscriber.complete();
    });
    var observable3 = new rxjs_1.Observable(function (subscriber) {
        subscriber.next(3);
        subscriber.error();
        subscriber.next(4);
        subscriber.complete();
    });
    // let subscription: Subscription = observable1.subscribe(observer1);
    // console.log('subscription: ' + subscription);
    observable1.subscribe(observer1);
    console.log('Line Break Not Working...\n\n - 1');
    observable2.subscribe(observer1);
    console.log('Line Break Not Working...\n\n - 2');
    observable3.subscribe(observer1);
    console.log('Line Break Not Working...\n\n - 3');
}
function demoSynchronousObservable2() {
    // Define an observer
    var sequenceObserver = {
        next: function (value) { return console.log('Value: ', value); },
        error: function (err) { return console.error('Error: ', err); },
        complete: function () { return console.log('sequenceObserver Completed Successfully!'); }
    };
    var sequenceSubscriberFunction = function (observer) {
        // Synchronously deliver 1, 2, 3 and then complete
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    };
    var observable1 = new rxjs_1.Observable(sequenceSubscriberFunction);
    var observable2 = new rxjs_1.Observable(function (subscriber) {
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
    var sequenceObserver = {
        next: function (value) { return console.log('Value: ', value); },
        error: function (err) { return console.error('Error: ', err); },
        complete: function () { return console.log('sequenceObserver Completed Successfully!'); }
    };
    /*
        // Define a subscriber
        const sequenceObserver2: Subscriber<number> = {
            next: (value: number) => console.log('Value: ', value),
            error: (err: any) => console.error('Error: ', err),
            complete: () => console.log('Observer 1 Completed Successfully!')
        };
    */
    var sequenceSubscriber = function (observer) {
        // Synchronously deliver 1, 2, 3 and then complete
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    };
    var sequenceSubscriber2 = function (subscriber) {
        // Synchronously deliver 1, 2, 3 and then complete.
        subscriber.next(4);
        subscriber.next(5);
        subscriber.next(6);
        subscriber.complete();
    };
    var observable1 = new rxjs_1.Observable(sequenceSubscriber);
    var observable2 = new rxjs_1.Observable(sequenceSubscriber2);
    var observable3 = new rxjs_1.Observable(function (observer) {
        observer.next(10);
        observer.next(20);
        observer.next(30);
        observer.complete();
    });
    var observable4 = new rxjs_1.Observable(function (subscriber) {
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

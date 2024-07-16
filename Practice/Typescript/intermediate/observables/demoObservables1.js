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
    demoSynchronousObservable2();
}
function demoSynchronousObservable1() {
    // Define an observer
    var observer1 = {
        next: function (value) { return console.log('Value: ', value); },
        error: function (err) { return console.error('Error: ', err); },
        complete: function () { return console.log('observer1 Completed Successfully!'); }
    };
    var sequenceSubscriberFunction = function (observer) {
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
    var observable1 = new rxjs_1.Observable(sequenceSubscriberFunction);
    //  Using Anonymous sequence subscriber function
    var observable2 = new rxjs_1.Observable(function (subscriber) {
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
    var observer = {
        next: function (value) { return console.log('Value: ', value); },
        error: function (err) { return console.error('Error: ', err); },
        complete: function () { return console.log('observer Completed Successfully!'); }
    };
    /*
        // Define a subscriber
        const sequenceObserver2: Subscriber<number> = {
            next: (value: number) => console.log('Value: ', value),
            error: (err: any) => console.error('Error: ', err),
            complete: () => console.log('Observer 1 Completed Successfully!')
        };
    */
    var sequenceSubscriberFunction1 = function (observer) {
        // Synchronously deliver 1, 2, 3 and then complete
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    };
    var sequenceSubscriberFunction2 = function (subscriber) {
        // Synchronously deliver 1, 2, 3 and then complete.
        subscriber.next(4);
        subscriber.next(5);
        subscriber.next(6);
        subscriber.complete();
    };
    var observable1 = new rxjs_1.Observable(sequenceSubscriberFunction1);
    var observable2 = new rxjs_1.Observable(sequenceSubscriberFunction2);
    //  Using Anonymous sequence subscriber function with `Observer` as args
    var observable3 = new rxjs_1.Observable(function (observer) {
        observer.next(10);
        observer.next(20);
        observer.next(30);
        observer.complete();
    });
    //  Using Anonymous sequence subscriber function with `Subscriber` as args
    var observable4 = new rxjs_1.Observable(function (subscriber) {
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

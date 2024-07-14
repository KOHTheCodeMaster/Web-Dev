"use strict";
/*

Time Stamp: 14th Jul. 2K24 - 11:09 AM..!!

Title: Asynchronous Data

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
main();
function main() {
    demoSynchronousObservable1();
    // demoSynchronousObservable2();
}
function demoSynchronousObservable1() {
    // Define an observer
    var observer1 = {
        next: function (value) { return console.log('Value: ', value); },
        error: function (err) { return console.error('Error: ', err); },
        complete: function () { return console.log('Observer 1 Completed successfully!'); }
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
        subscriber.next(3);
        subscriber.error();
        subscriber.next(4);
        subscriber.complete();
    });
    var observable3 = new rxjs_1.Observable(function (subscriber) {
        subscriber.next(5);
        subscriber.error();
        subscriber.next(6);
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

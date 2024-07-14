"use strict";
/*

Time Stamp: 14th Jul. 2K24 - 07:34 PM..!!

Title: Asynchronous Data

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
main();
function main() {
    demoSynchronousObservable1();
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
    observable1.subscribe(observer1);
    console.log('Line Break Not Working...\n\n - 1');
    console.log('Line Break Not Working...\n\n - 2');
    console.log('Line Break Not Working...\n\n - 3');
}

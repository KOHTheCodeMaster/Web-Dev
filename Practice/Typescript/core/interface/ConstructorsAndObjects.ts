/*

Time Stamp: 30th May 2K24 - 05:53 PM..!!

Concept: Constructors & Objects in TypeScript

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev/

----------------------------------------------------------------------------------------------------
*/

main();

function main() {

    demoObject();

    demoLiteralNotationObject();

    demoConstructor();

}

function demoObject() {

    let person = {
        name: "John",
        age: 26,
        greet: function() {
            console.log(`Greetings! ${this.name} here.`);
        }
    };

    person.greet(); // Output: Greetings! John here.

}

function demoLiteralNotationObject() {

    let ciaz = {
        make: "Maruti Suzuki",
        model: "Ciaz",
        year: 2020,
        start: function() {
            console.log(`${this.make} - ${this.model} started.`);
        }
    };

    ciaz.start(); // Output: Maruti Suzuki - Ciaz started

    // Modifying an existing property
    ciaz.year = 2021;
    console.log(ciaz.year); // Output: 2021

}

function demoConstructor() {

    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet(): void {
            console.log(`Greetings! ${this.name} here.`);
        }
    }

    let john = new Person("John", 26);
    john.greet(); // Output: Greetings! John here.

}


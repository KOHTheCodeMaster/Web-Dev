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
    var person = {
        name: "John",
        age: 26,
        greet: function () {
            console.log("Greetings! ".concat(this.name, " here."));
        }
    };
    person.greet(); // Output: Greetings! John here.
}
function demoLiteralNotationObject() {
    var ciaz = {
        make: "Maruti Suzuki",
        model: "Ciaz",
        year: 2020,
        start: function () {
            console.log("".concat(this.make, " - ").concat(this.model, " started."));
        }
    };
    ciaz.start(); // Output: Maruti Suzuki - Ciaz started
    // Modifying an existing property
    ciaz.year = 2021;
    console.log(ciaz.year); // Output: 2021
}
function demoConstructor() {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.greet = function () {
            console.log("Greetings! ".concat(this.name, " here."));
        };
        return Person;
    }());
    var john = new Person("John", 26);
    john.greet(); // Output: Greetings! John here.
}

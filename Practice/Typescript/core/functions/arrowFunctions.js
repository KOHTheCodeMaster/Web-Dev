/*
Date: 27th May 2K24 - 05:41 PM..!!

Concept: Arrow Functions

Keywords: Arrow Functions, `this` keyword

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev/

----------------------------------------------------------------------------------------------------
*/
main();
function main() {
    basicSyntax();
    anotherExample();
    //     thisInTraditionalFunction();
    thisInArrowFunction();
}
function basicSyntax() {
    // Arrow Functions in TypeScript
    // 1. Basic Syntax
    var add = function (a, b) { return a + b; };
    console.log('2 + 3 : ' + add(2, 3)); // Output: 5
    // 2. Single Parameter
    var square = function (x) { return x * x; };
    console.log('Square of 4 : ' + square(4)); // Output: 16
    // 3. No Parameters
    var greet = function () { return 'Greetings..!! ^-^'; };
    console.log(greet()); // Output: Greetings..!! ^-^
    // 4. Returning an Object
    var getPerson = function () { return ({ name: 'John', age: 30 }); };
    console.log(getPerson()); // Output: { name: 'John', age: 30 }
}
function anotherExample() {
    // Function to double a number
    var doubleX = function (x) {
        return x * 2;
    };
    // Call the function with a valid argument
    console.log('Double of 4: ' + doubleX(4)); // Output: 8
    // TypeScript will enforce that the argument must be a number
    //     console.log(doubleX('4'));   // Error: Argument of type 'string' is not assignable to parameter of type 'number'
    // TypeScript also ensures the return type is correct
    var result = doubleX(5);
    //     let result2: string = doubleX(5); // Error: Type 'number' is not assignable to type 'string'
}
function thisInTraditionalFunction() {
    // 5. Arrow Functions and `this`
    // Traditional function - issues with `this`
    function PersonTraditional() {
        this.age = 0;
        setInterval(function () {
            this.age++;
            console.log(this.age); // Output: NaN   |   `this` does not refer to Person instance
        }, 1000);
    }
    // Output will not be as expected & It will cause issues due to `this` binding issues
    var personTraditional = new PersonTraditional();
}
function thisInArrowFunction() {
    // Arrow function - correct handling of `this`
    function Person() {
        var _this = this;
        this.age = 0;
        setInterval(function () {
            _this.age++; // `this` refers to the Person instance
            console.log(_this.age);
        }, 1000);
    }
    var person = new Person(); // Output: 1, 2, 3, 4, ... (every second)
}

/*

Time Stamp: 29th May 2K24 - 06:49 PM..!!

Concept: Interface

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev/

----------------------------------------------------------------------------------------------------
*/
main();
function main() {
    demoInterface();
    demoInterfaceInFunction();
    demoExtendingInterface();
}
function demoInterface() {
    // Arrow function using the interface for the parameter type
    var greet = function (person) { return "Greetings ".concat(person.name, "! You are ").concat(person.age, " years old."); };
    // Call the function with an object
    console.log(greet({ name: "John Doe", age: 26 })); // Output: Greetings John Doe! You are 26 years old.
}
function demoInterfaceInFunction() {
    //  Declare person object
    var person = { name: "John Doe", age: 26, greet: function () { return "Yo! ".concat(this.name, " here."); } };
    // Using an Interface in a Function
    var greetPerson = function (person) { return "Greetings ".concat(person.name, "! You are ").concat(person.age, " years old."); };
    console.log(greetPerson(person)); // Output: Yo! John Doe here.
    console.log(person.greet()); // Output: Greetings John Doe! You are 26 years old.
}
function demoExtendingInterface() {
    var _this = this;
    var employee = {
        name: "Charlie",
        age: 22,
        employeeId: 1001,
        greet: function () { return "Yo! ".concat(_this.name, " here."); }
    };
    var greetPerson = function (person) { return "Greetings ".concat(person.name, "! You are ").concat(person.age, " years old."); };
    console.log(greetPerson(employee)); // Output: Greetings Charlie! You are 22 years old.
    console.log(employee.greet()); // Output: Yo! Charlie here.
    console.log("Employee ID: ".concat(employee.employeeId)); // Output: Employee ID: 1001
}

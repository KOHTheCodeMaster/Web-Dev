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

    // Define an interface for the object structure
    interface Person {
        name: string;
        age: number;
    }

    // Arrow function using the interface for the parameter type
    const greet = (person: Person): string => `Greetings ${person.name}! You are ${person.age} years old.`;

    // Call the function with an object
    console.log(greet({ name: "John Doe", age: 26 })); // Output: Greetings John Doe! You are 26 years old.

}


function demoInterfaceInFunction() {

    // Define an interface for the object structure
    interface Person {
        name: string;
        age: number;
        greet(): string;    //  Method declaration in interface
    }

    //  Declare person object
    let person: Person = { name: "John Doe", age: 26, greet: function() { return `Yo! ${this.name} here.`; }};

    // Using an Interface in a Function
    const greetPerson = (person: Person): string => `Greetings ${person.name}! You are ${person.age} years old.`;

    console.log(greetPerson(person));   // Output: Yo! John Doe here.
    console.log(person.greet());        // Output: Greetings John Doe! You are 26 years old.

}


function demoExtendingInterface() {

    interface Person {
        name: string;
        age: number;
        greet(): string;
    }

    interface Employee extends Person {
        employeeId: number;
    }

    let employee: Employee = {
        name: "Charlie",
        age: 22,
        employeeId: 1001,
        greet: () => `Yo! ${this.name} here.`
    };

    const greetPerson = (person: Person): string => `Greetings ${person.name}! You are ${person.age} years old.`;

    console.log(greetPerson(employee));     // Output: Greetings Charlie! You are 22 years old.
    console.log(employee.greet());          // Output: Yo! Charlie here.
    console.log(`Employee ID: ${employee.employeeId}`); // Output: Employee ID: 1001

}

/*
Date: 27th May 2K24 - 05:41 PM..!!

Concept: Getters & Setters, get & set keywords for properties

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev/

----------------------------------------------------------------------------------------------------
*/

main();

function main() {

//     example1();

//     example2();

//     exampleInvalidRecursiveSetPropertyCall();

//     demoSameOutCome();

    demoUnderscoreConfusionCleared();

    demoOnlySetterProperty();
}


function example1() {

    console.log("\nexample1 begin.");

    class Person {
        private _age: number = 0;

        get age(): number {
            return this._age;
        }

        set age(newAge: number) {
            if (newAge > 0) this._age = newAge;
            else {
                console.log("Age must be positive. Resetting to Default Age of 18.");
                this._age = 18;
            }
        }
    }

    let person1 = new Person();
    person1.age = 26;           // Calls the setter property & performs validation
    console.log("Person1 -> Age: " + person1.age);   // Calls the getter property | Output: 26


    let person2 = new Person();
    person2.age = -1;   // Attempting to set negative age resets to 18
    console.log("Person2 -> Age: " + person2.age);   // Calls the getter property | Output: 18

    console.log("example1 end.\n");

}


function example2() {

    console.log("\nexample2 begin.");

    class Person {
        private _age: number = 0;

        set age(newAge: number) {
            if (newAge > 0) this._age = newAge;
            else throw new Error("Error: Age can not be negative!");
        }
    }

    let person1 = new Person();

    // Attempting to set negative age throws an error
    try {
        person1.age = -1;
    } catch (error) {
      console.error(error.message); // Output: Age cannot be negative
    }

    console.log("example2 end.\n");

}


function exampleInvalidRecursiveSetPropertyCall() {

    class Person {

      public _name: string;  // Property

      public set Name(newName: string) { // Setter with same name as property

        console.log("Before Initializing -> Name: " + this.Name + " | _name: " + this._name);

        // Infinite Recursive call to this same setter property Name.
        this.Name = newName;

        // Logic to set the name
        this._name = newName;

        console.log("After Initializing -> Name: " + this.Name + " | _name: " + this._name);
      }
    }

    let person = new Person();
    person.Name = 'John';   // Calls the setter

}


function demoSameOutCome() {

    class Circle {
      private _radius: number; // Renamed with underscore due to getter setter property conflicts

      // Setter property
      public set radius(radius: number) {
        this._radius = radius;
      }

      // Setter method
      public setRadius(radius: number) {
        this._radius = radius;
      }

      // Getter property
      public get area() {
        return 3.14 * this._radius * this._radius;
      }

      // Regular method used for calculating area (functionally equivalent)
      public getArea() {
        return 3.14 * this._radius * this._radius;
      }
    }

    let circle1 = new Circle();
    circle1.radius = 10;   // Calls the setter property
    console.log("Circle1 -> Area: " + circle1.area);    // Calls the getter property

    let circle2 = new Circle();
    circle2.setRadius(20);   // Calls the setter property
    console.log("Circle2 -> Area: " + circle2.getArea());    // Calls the getter property

}


function demoUnderscoreConfusionCleared() {

    class Person {

      public _firstName: string;  // Property

      set FirstName(firstName: string) {
        console.log("set FirstName invoked.");
        this._firstName = firstName;
      }

    }

    let person = new Person();
    person.FirstName = 'John';      // Calls the setter
    console.log("_firstName: " + person._firstName);
//     console.log("firstName: " + person.firstName);   //  Compile Time Error - Property 'firstName' does not exist on type 'Person'.
//     console.log("_FirstName: " + person._FirstName); //  Compile Time Error - Property '_FirstName' does not exist on type 'Person'.

    //  TypeScript does not enforce the presence of a getter when a setter is defined, thus no compile-time error occurs.
    console.log("FirstName: " + person.FirstName);      // Outputs: undefined

}


function demoOnlySetterProperty() {

    class Person {
      public _name: string;  // Property
      set name(name: string) { this._name = name; }
    }

    let person = new Person();
    person.name = 'John';

    //  TypeScript does not enforce the presence of a getter when a setter is defined, thus no compile-time error occurs.
    console.log("name: " + person.name);    // Outputs: undefined

}

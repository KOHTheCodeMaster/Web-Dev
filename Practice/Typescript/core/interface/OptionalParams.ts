/*

Time Stamp: 29th May 2K24 - 06:49 PM..!!

Concept: Optional Parameters, Constructor Overloading

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev/

----------------------------------------------------------------------------------------------------
*/

main();

function main() {

    demoOptionalParams();

    demoMultipleConstructorsSimulated();

}


function demoOptionalParams() {
    class Car {
        make: string;
        model: string;
        color?: string; // Optional property

        constructor(make: string, model: string, color?: string) {
            this.make = make;
            this.model = model;
            if (color) this.color = color;
        }

        displayInfo() {
            //  The ?? operator (nullish coalescing) ensures a fallback value if color is not specified.
            console.log(`Make: ${this.make}, Model: ${this.model}, Color: ${this.color ?? 'Not specified'}`);
        }
    }

    let car1 = new Car("Maruti Suzuki", "Ciaz");
    let car2 = new Car("Ford Mustang", "GT Fastback", "Black");

    car1.displayInfo(); // Output: Make: Maruti Suzuki, Model: Ciaz, Color: Not specified
    car2.displayInfo(); // Output: Make: Ford Mustang, Model: GT Fastback, Color: Red
}

function demoMultipleConstructorsSimulated() {

    class Point {
      x: number;
      y: number;

      constructor(x: number, y?: number) { // Make y optional
        this.x = x;
        this.y = y ? y : 0; // Default y to 0 if not provided
      }
    }

    let point1 = new Point(1);      // Only x provided (y defaults to 0)
    let point2 = new Point(2, 3);   // x and y provided

}


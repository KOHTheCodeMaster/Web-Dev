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
    var Car = /** @class */ (function () {
        function Car(make, model, color) {
            this.make = make;
            this.model = model;
            if (color)
                this.color = color;
        }
        Car.prototype.displayInfo = function () {
            var _a;
            //  The ?? operator (nullish coalescing) ensures a fallback value if color is not specified.
            console.log("Make: ".concat(this.make, ", Model: ").concat(this.model, ", Color: ").concat((_a = this.color) !== null && _a !== void 0 ? _a : 'Not specified'));
        };
        return Car;
    }());
    var car1 = new Car("Maruti Suzuki", "Ciaz");
    var car2 = new Car("Ford Mustang", "GT Fastback", "Red");
    car1.displayInfo(); // Output: Make: Maruti Suzuki, Model: Ciaz, Color: Not specified
    car2.displayInfo(); // Output: Make: Ford Mustang, Model: GT Fastback, Color: Red
}
function demoMultipleConstructorsSimulated() {
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y ? y : 0; // Default y to 0 if not provided
        }
        return Point;
    }());
    var point1 = new Point(1); // Only x provided (y defaults to 0)
    var point2 = new Point(2, 3); // x and y provided
}

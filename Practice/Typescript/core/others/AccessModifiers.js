/*

Date: 30th May 2K24 - 07:10 PM

Title: Access Modifiers

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
main();
function main() {
    demoPublicAccessModifier();
    demoPrivateAccessModifier();
    demoProtectedAccessModifier();
}
function demoPublicAccessModifier() {
    console.log('\ndemoPublicAccessModifier() method started.');
    var Food = /** @class */ (function () {
        function Food(name) {
            this.name = name;
        }
        Food.prototype.taste = function () {
            console.log("This " + this.name + " tastes delicious!"); // Public method, callable anywhere
        };
        return Food;
    }());
    var myPizza = new Food("Pizza");
    console.log(myPizza.name); // Accessing public field
    myPizza.taste(); // Calling public method
    console.log('demoPublicAccessModifier() method ended.\n');
}
function demoPrivateAccessModifier() {
    console.log('\ndemoPrivateAccessModifier() method started.');
    var Recipe = /** @class */ (function () {
        function Recipe() {
            this.cookingTime = 30; // Private property, only accessible within Recipe class
        }
        Recipe.prototype.prepare = function () {
            console.log("Preparing the Pizza.");
            this.cook(this.cookingTime); // Private method call from public method
        };
        Recipe.prototype.cook = function (minutes) {
            console.log("Cooking for " + minutes + " minutes.");
        };
        return Recipe;
    }());
    var myCake = new Recipe(); // Can't access cookingTime directly
    myCake.prepare(); // Public method can access private fields and methods internally
    console.log('demoPrivateAccessModifier() method ended.\n');
}
function demoProtectedAccessModifier() {
    console.log('\ndemoProtectedAccessModifier() method started.');
    var FoodItem = /** @class */ (function () {
        function FoodItem(calorieCount) {
            this.calorieCount = calorieCount;
        }
        return FoodItem;
    }());
    var Fruit = /** @class */ (function (_super) {
        __extends(Fruit, _super);
        function Fruit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fruit.prototype.caloriesCount = function () {
            return this.calorieCount * 0.5; // Access protected property from subclass and potentially adjust
        };
        return Fruit;
    }(FoodItem));
    var myApple = new Fruit(100);
    console.log(myApple.caloriesCount()); // Calling method from subclass that accesses protected property
    console.log('demoProtectedAccessModifier() method ended.\n');
}

/*

Date: 30th May 2K24 - 07:10 PM

Title: Access Modifiers

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/

main();

function main() {

    demoPublicAccessModifier();

    demoPrivateAccessModifier();

    demoProtectedAccessModifier();

}

function demoPublicAccessModifier() {

    console.log('\ndemoPublicAccessModifier() method started.');

    class Food {
      public name: string;  // Public field, accessible anywhere

      public constructor(name: string) {
        this.name = name;
      }

      public taste() {
        console.log("This " + this.name + " tastes delicious!"); // Public method, callable anywhere
      }
    }

    let myPizza = new Food("Pizza");
    console.log(myPizza.name);  // Accessing public field
    myPizza.taste();            // Calling public method

    console.log('demoPublicAccessModifier() method ended.\n');

}

function demoPrivateAccessModifier() {

    console.log('\ndemoPrivateAccessModifier() method started.');

    class Recipe {
      private cookingTime: number = 30; // Private property, only accessible within Recipe class

      public prepare() {
        console.log("Preparing the Pizza.");
        this.cook(this.cookingTime); // Private method call from public method
      }

      private cook(minutes: number) {
        console.log("Cooking for " + minutes + " minutes.");
      }
    }

    let myCake = new Recipe();  // Can't access cookingTime directly
    myCake.prepare();           // Public method can access private fields and methods internally

    console.log('demoPrivateAccessModifier() method ended.\n');

}

function demoProtectedAccessModifier() {

    console.log('\ndemoProtectedAccessModifier() method started.');

    class FoodItem {
      protected calorieCount: number;   // Protected property, accessible in FoodItem and its subclasses

      public constructor(calorieCount: number) {
        this.calorieCount = calorieCount;
      }
    }

    class Fruit extends FoodItem {
      caloriesCount() {
        return this.calorieCount * 0.5; // Access protected property from subclass and potentially adjust
      }
    }

    let myApple = new Fruit(100);
    console.log(myApple.caloriesCount()); // Calling method from subclass that accesses protected property

    console.log('demoProtectedAccessModifier() method ended.\n');
}

/*

Date: 30th May 2K24 - 07:33 PM

Title: Access Modifiers

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/

main();

function main() {

    demoShortHandFieldInitialization();

}


function demoShortHandFieldInitialization() {

    class Person {
      constructor(name: string, age: number) {  // No access modifier specified
      }
    }

    let john = new Person("John Doe", 26);
    console.log(john.name);  // Compile-time error: Property 'name' does not exist on type 'Person'

}

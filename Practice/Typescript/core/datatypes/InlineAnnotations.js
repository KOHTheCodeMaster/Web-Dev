/*

Time Stamp: 28th May 2K24 - 09:04 PM..!!

Concept: Inline Annotations

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev/

----------------------------------------------------------------------------------------------------
*/
main();
function main() {
    demoInlineAnnotationVariables();
    demoFunctionParameters();
    demoFunctionReturnTypes();
}
function demoInlineAnnotationVariables() {
    // Inline annotation for variable declaration
    var num = 10;
    var message = "Greetings!";
    var isValid = true;
}
function demoFunctionParameters() {
    // Inline annotation for function parameters
    function greet(name) {
        console.log("Greetings ".concat(name, "!"));
    }
    // Call the function with a valid argument
    greet("John Doe");
    // Uncommenting the following line will cause a type error
    greet(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
}
function demoFunctionReturnTypes() {
    // Inline annotation for function return type
    var add = function (x, y) { return x + y; };
    // Call the function and assign the result to a variable with the correct type
    var sum = add(5, 3);
    // Uncommenting the following line will cause a type error
    // let invalidResult: string = add(5, 3); // Error: Type 'number' is not assignable to type 'string'
}

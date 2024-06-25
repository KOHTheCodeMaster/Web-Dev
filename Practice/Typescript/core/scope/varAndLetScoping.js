/*

Date: 28th June 2K23 - 12:26 PM

Title: Var & Let Scoping.

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/
main();
function main() {
    letScopingCompileTimeError();
    varScoping();
    sameNameVariableScoping();
}
function letScopingCompileTimeError() {
    console.log("Method: letScopingCompileTimeError Begins.");
    if (true) {
        var x = 1;
        console.log('x: ' + x); // x: 1
    }
    console.log('Compile Time Error - error TS2304: Cannot find name \'x\'.\n' +
        'But still it is compiled and converted to JS code, which contains var keyword and produces output as per JS var scoping.');
    // console.log('x: ' + x);
    console.log("Method: letScopingCompileTimeError Ends.\n");
}
function varScoping() {
    console.log("Method: varScoping Begins.");
    var x = 1;
    if (true) {
        var x_1 = 2;
        console.log('x: ' + x_1 + '   |   let scope x variable is used');
    }
    console.log('x: ' + x + '   |   var scope x variable is used');
    console.log("Method: varScoping Ends.\n");
}
function sameNameVariableScoping() {
    console.log("Method: sameNameVariableScoping Begins.");
    console.log('We can define same name variables in different blocks without any conflicts,\n' +
        'as long as there are no 2 variables with same name within the same block.');
    var x = 1; //  Variable 1: Function Block
    if (true) {
        var x_2 = 2; //  Variable 2: 1st If Block
        console.log('1st If Block | x: ' + x_2); //  x: 2
        if (true) { //  Variable 3: 2nd If Block
            var x_3 = 3;
            console.log('2nd If Block | x: ' + x_3); //  x: 3
        }
    }
    console.log('Function Block using var scope | x: ' + x); //  x: 1
    console.log("Method: sameNameVariableScoping Ends.\n");
}

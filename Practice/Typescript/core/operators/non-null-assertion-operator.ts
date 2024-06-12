/*

Date: 30th May 2K24 - 07:10 PM

Title: Access Modifiers

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/

main();

function main() {

    demoNonNullAssertionOperator();

    // demoNonNullAssertionOperator2();

}

function demoNonNullAssertionOperator() {

    let username!: string; // Declares username as string and asserts it's not nullish

    function greetUser() {
        console.log("Greetings " + username.toUpperCase()); // (No Compile-time Error)
    }

    username = "John Doe";  // Before calling greetUser, ensure username is properly initialized with a string value
    greetUser();

}

function demoNonNullAssertionOperator2() {

    let name: string | null = null; // Variable can be null

    // Without Non-null Assertion Operator (No Compile-time Error)
    console.log(name.toUpperCase());

    // With Non-null Assertion Operator (!) (No Compile-time Error)
    console.log(name!.toUpperCase());

}

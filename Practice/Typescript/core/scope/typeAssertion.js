/*

Date: 28th June 2K23 - 01:13 PM

Title: Type Assertion

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/TypeScript-Fundamentals

*/
main();
function main() {
    typeAssertionExample();
}
function typeAssertionExample() {
    /*
        In TypeScript, type assertion is a way to tell the compiler about the specific type of a value when the compiler is unable to infer it automatically.
        It allows you to override the default type inference and provide a more specific type for a variable.

        Type assertions are performed using the angle bracket syntax (<Type>value) or the as keyword (value as Type).
        Both the syntax are equivalent, but the as syntax is recommended for better compatibility with JSX.

        Here is a short and crisp note on type assertion in TypeScript:

        1. Use type assertion when you know more about the type of a value than the compiler does.
        2. Type assertion does not perform any runtime type checking or data conversion. It is purely a way to inform the compiler about the type.
        3. Type assertions are used when you have a variable of a union type, and you want to access a property or invoke a method specific to one of the union's constituent types.
        4. Be cautious when using type assertion, as asserting the wrong type can lead to runtime errors. Make sure you have proper knowledge of the underlying data type.
        5. If you find yourself using type assertions frequently, consider revisiting your type declarations or using a different approach like type guards or narrowing techniques to provide more precise types.

        Remember, Type assertions should be used sparingly and only when necessary.
        It's generally preferable to let the TypeScript compiler infer types automatically to leverage the benefits of static typing.

     */
    var str = "ABC";
    console.log(str);
    //  When we attempt to perform any operation directly on unknown type variable, we will get compile time error.
    var strLen1 = str.length; //  TS2339: Property 'length' does not exist on type 'unknown'.
    console.log('strLen1: ' + strLen1);
    //  Hence, we need to narrow down to precise data type by performing Type Assertion when dealing with unknown data type variable.
    var strLen2 = str.length;
    var strLen3 = str.length; //  Alternative way of Type Assertion
    console.log('strLen2: ' + strLen2);
    console.log('strLen3: ' + strLen3);
}

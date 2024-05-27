/*

Date: 28th June 2K23 - 01:13 PM

Title: Data Types & Enum

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/

main();

function main() {

    availableDataTypes();

    unknownDataType();

    tupleDataType();

    compileTimeErrorOnChangingDataType();

}

function availableDataTypes() {

    // console.log("Method: availableDataTypes Begins.");

    let num1: number = 123;
    let str1: string = 'ABC';
    let flag: boolean = true;
    let anyVar: any;

    let numArr: number[] = [1, 2, 3];
    let anyArr: any[] = [1, true, 'XYZ'];

    // console.log("Method: availableDataTypes Ends.\n");

}

function unknownDataType() {

    /*
        In Typescript, any value can be assigned to unknown. Similar to 'any', we can assign any value to the unknown.
        The 'unknown' type in TypeScript represents a value that can be of any type. It is similar to 'any' type, but with stricter usage rules.
        While any allows you to perform any operation on it without type checking, unknown requires you to perform some type checking before operating on it.

        Unknown type is used to make our code type-safe. when we use the unknown type we have to write extra code but finally,
        our code will be type-safe. Type safety is nothing but the prevention of type errors.
     */

    console.log("Method: unknownDataType Begins.");

    let unknownX: unknown;
    console.log(unknownX);

    unknownX = true;                //  Assigning boolean value
    console.log(unknownX);

    unknownX = 1;                   //  Assigning number value
    console.log(unknownX);

    unknownX = "ABC";               //  Assigning string value
    console.log(unknownX);

    unknownX = [1, 2, 3, 4];        //  Assigning Array value
    console.log(unknownX);

    unknownX = {name: "John Doe"};  //  Assigning object value
    console.log(unknownX);

    unknownX = Math.random();       //  Assigning random number value
    console.log(unknownX);

    unknownX = null;                //  Assigning null value
    console.log(unknownX);

    unknownX = undefined;           //  Assigning undefined value
    console.log(unknownX);


    let str: unknown = "ABC";
    console.log(str);

    //  When we attempt to perform any operation directly on unknown type variable, we will get compile time error.
    let strLen1: number = str.length;    //  TS2339: Property 'length' does not exist on type 'unknown'.
    console.log('strLen1: ' + strLen1);

    console.log("\nMethod: unknownDataType Ends.\n");

}

function tupleDataType() {

    /*
        In the below example, we have defined a variable num1 as number type and str1 as string type with values.
        The same thing can be achieved by using a single tuple type variable with two values of number and string type.
        Thus, removing the need to declare two different variables.

        Tuple can be considered as 'Any' Array
     */
    console.log("Method: tupleDataType Begins.");


    let num1: number = 1;
    let str1: string = "ABC";
    var tuple1: [number, string] = [1, "ABC"];  // Tuple type variable


    //  A tuple type variable can include multiple data types as well.
    let employee: [number, string] = [1, "John"];
    let person: [number, string, boolean] = [1, "Doe", true];
    let user: [number, string, boolean, number, string] = [1, "Steve", true, 20, "Admin"];  // initialize tuple variable

    //  We can declare an array of tuple also.
    let tupleArr: [number, string][] = [[1, "A"], [2, "B"], [3, "C"]];

    //  Accessing Tuple Elements
    var tuple2: [number, string] = [1, "XYZ"];
    tuple2[0]; // returns 1
    tuple2[1]; // returns "XYZ"

    //  Add Elements into Tuple
    var tuple3: [number, string] = [1, "John"];
    tuple3.push(2, "Doe");
    console.log('Tuple3: ' + tuple3);

    tuple3.push(3, 4, 5, 6, 7); //  This is also valid, not sure why... Suspicious Doubt Unresolved!
    console.log('Tuple3: ' + tuple3);

    //  When trying to add invalid data type to tuple, we get compile time error.
    tuple3.push(true);  //  TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

    console.log("\nMethod: tupleDataType Ends.\n");

}

function compileTimeErrorOnChangingDataType() {

    console.log("Method: compileTimeErrorOnChangingDataType Begins.\n");

    let count: number;  //  Declaring variable num1 of data type number.
    count = 3;  //  Initializing count with number value.

    console.log('When we try to assign string value to count, we get compile time error.' +
        'TS2322: Type \'string\' is not assignable to type \'number\'.');
    count = 'ABC';

    console.log('\nWe are using count variable and trying to perform numeric add operation.' +
        'Since we assigned count with string value, it\'ll concatenate instead of adding 100 value. ' +
        'In JS, we will get to know about this logical error during runtime, ' +
        'But Data Types in TypeScript allows us to see these errors during compile time itself.');

    console.log('\nCount + 100: ' + (count + 100));

    console.log("\nMethod: availableDataTypes Ends.\n");

}


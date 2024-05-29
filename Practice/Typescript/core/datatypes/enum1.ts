/*

Date: 28th June 2K23 - 01:13 PM

Title: Data Types & Enum

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/

main();

function main() {

    enumGradeExample();

    enumRomanNumberExample();

}

function enumGradeExample() {

    console.log("\nMethod: enumGradeExample Begins.");

    //  Adding additional Enum will automatically be assigned the last value incremented by 1. (E.g. G will be 6)
    enum Grade { A, B, C, D, E, F};

    console.log('Using enums, it allows to assign only available valid values, ' +
        'and if we try to assign any invalid values, it\'ll give us the Error during compile time itself.');

    let currentGrade: Grade = Grade.A;
    console.log('Initializing currentGrade with Grade.A | currentGrade: ' + currentGrade);   //  currentGrade: 0

    currentGrade = 2;
    console.log('\nAssigning currentGrade with 2 numeric value i.e. in range of 0-5 A-F | ' +
        'currentGrade: ' + currentGrade);   //  currentGrade: 2

    //  Uncommenting the following line will cause a type error
    //  currentGrade = 10;
    /*
        Assigning currentGrade with 10 numeric value i.e. outside of range 0-5 A-F.
        Compile Time Error: Type '10' is not assignable to type 'Grade'
        But still we get output as 10 in JS Code.
    */

    console.log("\nMethod: enumGradeExample Ends.\n");

}

function enumRomanNumberExample() {

    console.log("\nMethod: enumRomanNumberExample Begins.");

    enum RomanNumber { I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000};

    console.log('\nUsing enums, it allows to assign only available valid values, ' +
        'and if we try to assign any invalid values, it\'ll give us the Error during compile time itself.');

    let num1: RomanNumber = RomanNumber.I;
    console.log('num1: ' + num1);   //  romanNum: 1

    let num5: RomanNumber = RomanNumber.V;
    console.log('num5: ' + num5);   //  romanNum: 5

    let num10: RomanNumber = RomanNumber.X;
    console.log('num10: ' + num10);   //  romanNum: 10

    let num50: RomanNumber = RomanNumber.L;
    console.log('num50: ' + num50);   //  romanNum: 50

    let num100: RomanNumber = RomanNumber.C;
    console.log('num100: ' + num100);   //  romanNum: 100

    let num500: RomanNumber = RomanNumber.D;
    console.log('num500: ' + num500);   //  romanNum: 500

    let num1000: RomanNumber = RomanNumber.M;
    console.log('num1000: ' + num1000);   //  romanNum: 1000

    console.log("\nMethod: enumRomanNumberExample Ends.\n");

}

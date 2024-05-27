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
    var Grade;
    (function (Grade) {
        Grade[Grade["A"] = 0] = "A";
        Grade[Grade["B"] = 1] = "B";
        Grade[Grade["C"] = 2] = "C";
        Grade[Grade["D"] = 3] = "D";
        Grade[Grade["E"] = 4] = "E";
        Grade[Grade["F"] = 5] = "F";
    })(Grade || (Grade = {}));
    ;
    console.log('Using enums, it allows to assign only available valid values, ' +
        'and if we try to assign any invalid values, it\'ll give us the Error during compile time itself.');
    var currentGrade = Grade.A;
    console.log('Initializing currentGrade with Grade.A | currentGrade: ' + currentGrade); //  currentGrade: 0
    currentGrade = 2;
    console.log('\nAssigning currentGrade with 2 numeric value i.e. in range of 0-5 A-F | ' +
        'currentGrade: ' + currentGrade); //  currentGrade: 2
    currentGrade = 10;
    console.log('\nAssigning currentGrade with 10 numeric value i.e. outside of range 0-5 A-F.');
    console.log('Compile Time Error: Type \'10\' is not assignable to type \'Grade\'');
    console.log('\nBut still we get output as 10 in JS Code.' + 'currentGrade: ' + currentGrade); //  currentGrade: 10
    console.log("\nMethod: enumGradeExample Ends.\n");
}
function enumRomanNumberExample() {
    console.log("\nMethod: enumRomanNumberExample Begins.");
    var RomanNumber;
    (function (RomanNumber) {
        RomanNumber[RomanNumber["I"] = 1] = "I";
        RomanNumber[RomanNumber["V"] = 5] = "V";
        RomanNumber[RomanNumber["X"] = 10] = "X";
        RomanNumber[RomanNumber["L"] = 50] = "L";
        RomanNumber[RomanNumber["C"] = 100] = "C";
        RomanNumber[RomanNumber["D"] = 500] = "D";
        RomanNumber[RomanNumber["M"] = 1000] = "M";
    })(RomanNumber || (RomanNumber = {}));
    ;
    console.log('\nUsing enums, it allows to assign only available valid values, ' +
        'and if we try to assign any invalid values, it\'ll give us the Error during compile time itself.');
    var num1 = RomanNumber.I;
    console.log('num1: ' + num1); //  romanNum: 1
    var num5 = RomanNumber.V;
    console.log('num5: ' + num5); //  romanNum: 5
    var num10 = RomanNumber.X;
    console.log('num10: ' + num10); //  romanNum: 10
    var num50 = RomanNumber.L;
    console.log('num50: ' + num50); //  romanNum: 50
    var num100 = RomanNumber.C;
    console.log('num100: ' + num100); //  romanNum: 100
    var num500 = RomanNumber.D;
    console.log('num500: ' + num500); //  romanNum: 500
    var num1000 = RomanNumber.M;
    console.log('num1000: ' + num1000); //  romanNum: 1000
    console.log("\nMethod: enumRomanNumberExample Ends.\n");
}

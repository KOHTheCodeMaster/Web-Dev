
import { add, subtract } from './mathUtils';

export function demoBasicExample() {
    console.log("\ndemoBasicModules begin.");

    console.log("Add -> 5 + 3 = " + add(5, 3));             // Output: 8
    console.log("Subtract -> 5 - 3 = " + subtract(5, 3));   // Output: 2

    console.log("demoBasicModules end.\n");
}

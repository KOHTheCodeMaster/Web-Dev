
import { apple, melon, getFruitNames, carrot, spinach, getVegetableNames } from './food/index';

export function demoReExportingModules() {
    console.log("\ndemoReExportingModules begin.");

    console.log(apple);                 // Output: Apple
    console.log(melon);                 // Output: Melon
    console.log(carrot);                // Output: Carrot
    console.log(spinach);               // Output: Broccoli
    console.log(getFruitNames());       // Output: [ 'Apple', 'Tomato' 'Melon']
    console.log(getVegetableNames());   // Output: [ 'Carrot', 'Garlic', 'Spinach' ]

    console.log("demoReExportingModules end.\n");
}

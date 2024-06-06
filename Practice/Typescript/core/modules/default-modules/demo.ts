
import User from './user';

export function demoDefaultModules() {
    console.log("\ndemoDefaultModules begin.");

    const user = new User('John Doe');
    console.log(user.name); // Output: John Doe

    console.log("demoDefaultModules end.\n");
}

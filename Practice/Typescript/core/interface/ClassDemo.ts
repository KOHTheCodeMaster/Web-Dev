/*

Time Stamp: 29th May 2K24 - 06:49 PM..!!

Concept: Class

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev/

----------------------------------------------------------------------------------------------------
*/

main();

function main() {

    demoCombiningInterfaceAndClass();

    demoExtendingClass();

}

function demoCombiningInterfaceAndClass() {
    // When a class implements an interface, it must define not only the methods but also the properties declared in the interface.
    // Failing to do so will result in a compile-time error because the class won't fully adhere to the interface contract.

    // Interface representing a Product
    interface Product {
        id: number;
        name: string;
        price: number;
        getDetails(): string;
    }

    // Class implementing the Product interface
    class Book implements Product {
        id: number;
        name: string;
        price: number;
        author: string;

        constructor(id: number, name: string, price: number, author: string) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.author = author;
        }

        getDetails(): string {
            return `Book: ${this.name} by ${this.author}, Price: $${this.price}`;
        }
    }

    let book1 = new Book(1, "TypeScript Basics", 29.99, "John Doe");
    console.log(book1.getDetails()); // Output: Book: TypeScript Basics by John Doe, Price: $29.99

}

function demoExtendingClass() {

    // Class representing a User
    class User {
        username: string;
        email: string;
        password: string;

        constructor(username: string, email: string, password: string) {
            this.username = username;
            this.email = email;
            this.password = password;
        }

        // Method to display user information
        displayInfo(): string {
            return `User: ${this.username}, Email: ${this.email}`;
        }
    }

    // Class representing an Admin, which is a type of User
    class Admin extends User {
        adminLevel: number;

        constructor(username: string, email: string, password: string, adminLevel: number) {
            super(username, email, password);
            this.adminLevel = adminLevel;
        }

        // Method to display admin information
        displayAdminInfo(): string {
            return `${this.displayInfo()}, Admin Level: ${this.adminLevel}`;
        }
    }

    let admin1 = new Admin("admin_john", "john@example.com", "securepassword", 1);
    console.log(admin1.displayAdminInfo()); // Output: User: admin_john, Email: john@example.com, Admin Level: 1

}


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
}
function demoCombiningInterfaceAndClass() {
    // Class implementing the Product interface
    var Book = /** @class */ (function () {
        function Book(id, name, price, author) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.author = author;
        }
        Book.prototype.getDetails = function () {
            return "Book: ".concat(this.name, " by ").concat(this.author, ", Price: $").concat(this.price);
        };
        return Book;
    }());
    var book1 = new Book(1, "TypeScript Basics", 29.99, "John Doe");
    console.log(book1.getDetails()); // Output: Book: TypeScript Basics by John Doe, Price: $29.99
}

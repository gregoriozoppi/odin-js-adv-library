function Book(title, author, pages, read) {
    if (new.target === undefined) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    }
}
let book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
console.log(book.info());



function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(this.name);
    };
}

Player.prototype.sayHello = function () {
    console.log("Hello, I'm a player!");
};

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

player1.sayName(); // logs "steve"
player2.sayName(); // logs "also steve"

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"

Object.getPrototypeOf(player1).sayGoodbye = function () {
    console.log("Goodbye, I'm a player!");
};

player1.sayGoodbye(); // logs "Goodbye, I'm a player!"
player2.sayGoodbye(); // logs "Goodbye, I'm a player!"


function Hero(name, level) {
    this.name = name;
    this.level = level;
}
// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}

let hero1 = new Hero('Bjorn', 1);
console.log(hero1);

let hp = Object.getPrototypeOf(hero1);
console.log(hp);
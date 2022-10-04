"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string, boolean, number, any
let numb = 10;
numb = 16;
// definition by inference
let eleven = 11;
// definition by annotation
let twelve = 12;
// data types
let firstName = "bombasto";
let age = 20;
let admin = true;
/*  NOTE:
    Objects use UpperCamelCase
    types use loweCamelCase
*/
console.log(typeof firstName);
// Object
const myNumbers = [1, 2, 3];
console.log(myNumbers.length);
myNumbers.push(5); // adds 5 to array
let myTuple;
myTuple = [5, "word", ["many", "words"]];
// Object Literals
const user = {
    name: "bombasto",
    age: 20
};
console.log(user);
console.log(user.name);
// 
let thing = 0;
thing = "toString";
thing = true;
thing = [1, 2, 3];
thing = ["many", "words"];
// union type
let id = "10";
const userIde = 10;
const productId = "01";
// enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.P
};
console.log(camisa);
// literal types
let test;
test = "authenticated";
test = null;
// functions
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// return type string
function printHello(name) {
    return `Hello ${name}`;
}
console.log(printHello("Bombasto!"));
// return type void
function out(msg) {
    console.log(msg);
}
out("print any message easily!");
// optional function arguments
function greeting(name, know) {
    if (know) {
        console.log(`${know} ${name}!`);
        return;
    }
    if (!know) {
        console.log(`"Guard of the empire castle": who are you? "${name} "How disrespectful of me! Let me introduce! I'm ${name}`);
        return;
    }
    console.log(`Hello ${name}`);
}
greeting("Bombasto");
greeting("Welcome again ", "mr.Bokenkamp");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
sumNumbers({ n1: 1, n2: 2 });
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// narrowing {type checking}
function doSomething(info) {
    // narrowing the typeof variable
    if (typeof info === "number") {
        console.log(`The number is ${info}`);
        return;
    }
    console.log("A number was not passed");
}
doSomething(5);
doSomething(true);
// generics {executes a function with any datatype}
// works with: Array of Strings, Array of Numbers, Array of Booleans
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const listA = [1, 2, 3];
const listB = ["a", "b", "c"];
showArrayItems(listA);
showArrayItems(listB);
// Oriented Object section: classes
class User {
    constructor(name, lastName, role, isAprooved) {
        this.name = name;
        this.lastName = lastName;
        this.role = role;
        this.isAprooved = isAprooved;
    }
    showUserName() {
        console.log(`The user name is ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`The user role is ${this.role}`);
            return;
        }
        console.log("restrict access information");
    }
}
const bombasto = new User("Bombasto", "Bokenkamp", "admin", true);
console.log(bombasto);
bombasto.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`The car brand is ${this.brand}`);
    }
}
const fusca = new Car("wolkswagen", 4);
fusca.showBrand();
// inheritance
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const Audi = new SuperCar("Audi", 4, 2);
console.log(Audi);
Audi.showBrand();
// decorators: are functions that respond to an observable event 
// a function that returns a generic objetc that extends a new instance of all "...args" of the array any type arguments ": any[]" Object ":{}"
// this is the constructor decorator
// this means that iam inserting new arguments to the Pearson constructor "{ new (...args: any[]): {}}"
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.adob = new Date(); // acronym: account date of birth
            }
        };
    };
}
let Pearson = class Pearson {
    constructor(name) {
        this.name = name;
    }
};
Pearson = __decorate([
    BaseParameters()
], Pearson);
const sam = new Pearson("Sam");
console.log(sam);

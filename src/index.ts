// string, boolean, number, any
let numb: number = 10;

numb = 16;

// definition by inference
let eleven = 11;

// definition by annotation
let twelve: number = 12;

// data types
let firstName: string = "bombasto";
let age: number = 20;
let admin: boolean = true;

/*  NOTE:
    Objects use UpperCamelCase
    types use loweCamelCase
*/

console.log(typeof firstName);

// Object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers.length);
myNumbers.push(5); // adds 5 to array

let myTuple: [number, string, string[]];
myTuple = [5, "word", ["many", "words"]];

// Object Literals
const user: {name: string, age: number} = {
    name: "bombasto",
    age: 20
}

console.log(user);
console.log(user.name);

// 
let thing: any = 0;
thing = "toString"
thing = true;
thing = [1,2,3];
thing = ["many","words"];

// union type
let id: string | number = "10"

// type alias
type myIdType = number | string;
const userIde: myIdType = 10;
const productId: myIdType = "01";

// enum
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.P
}

console.log(camisa);

// literal types
let test: "authenticated" | null;
test = "authenticated";
test = null;

// functions
function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(12,12));

// return type string
function printHello(name:string): string {
    return `Hello ${name}`;
}
console.log(printHello("Bombasto!"));

// return type void
function out(msg:string): void {
    console.log(msg);
}
out("print any message easily!");

// optional function arguments
function greeting(name: string, know?: string): void{
    if(know){
        console.log(`${know} ${name}!`);
        return;
    } if (!know) {
        console.log(
            `"Guard of the empire castle": who are you? "${name} "How disrespectful of me! Let me introduce! I'm ${name}`);
        return;
    }
    console.log(`Hello ${name}`);
}

greeting("Bombasto");
greeting("Welcome again ", "mr.Bokenkamp");

// interfaces {helps standarize sructures }
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers (nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

sumNumbers({n1:1, n2:2});

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));

// narrowing {type checking}
function doSomething(info: number | boolean) {
    // narrowing the typeof variable
    if(typeof info === "number") {
        console.log(`The number is ${info}`);
        return;
    }
    console.log("A number was not passed");
}

doSomething(5);
doSomething(true);

// generics {executes a function with any datatype}
// works with: Array of Strings, Array of Numbers, Array of Booleans
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    })
}

const listA = [1, 2 , 3];
const listB = ["a", "b", "c"];

showArrayItems(listA);
showArrayItems(listB);

// Oriented Object section: classes
class User {
    name;
    lastName;
    role;
    isAprooved;

    constructor(name: string, lastName:string, role: string, isAprooved: boolean) {
        this.name = name;
        this.lastName = lastName;
        this.role = role;
        this.isAprooved = isAprooved;
    }

    showUserName() {
        console.log(`The user name is ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(`The user role is ${this.role}`);
            return;
        }
        console.log("restrict access information");
    }
}

const bombasto = new User("Bombasto", "Bokenkamp", "admin", true);
console.log(bombasto);
bombasto.showUserRole(false);


// interfaces in classes: interfaces dictate how classes behave
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {

    brand;
    wheels;

    constructor(brand: string, wheels:number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`The car brand is ${this.brand}`);
    }
}

const fusca = new Car("wolkswagen", 4);
fusca.showBrand();


// inheritance
class SuperCar extends Car {
    
    engine;
    
    constructor(brand: string, wheels: number, engine: number) {
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
    return function<T extends { new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            adob = new Date(); // acronym: account date of birth
        }
    }
}

@BaseParameters()
class Pearson {
    
    name;
    
    constructor(name:string) {
       this.name = name; 
    }
}

const sam = new Pearson("Sam");
console.log(sam);

TheJourneyBeginning
TypeScriptBeginning


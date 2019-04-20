export interface Person {
    firstName: string;
    lastName?: string;
    [propName: string]: any; //this means any property of any type can be passed
    //interfaces can have methods also
    greet(lastName: string): void;
}

export function greet(person: Person): void {
    console.log('Hello ' + person.firstName);
}

export function changeName(person: Person) {
    person.firstName = "Harry";
}

class Employee implements Person {
    firstName: string;

    constructor(firstName:string) {
        this.firstName = firstName
    }
    greet(lastName: string) {
        console.log(lastName);
    }
}

// const p = new Employee('Ranjiht');
// p.greet('Kolpyak');
// console.log(p);

//Function Types
interface DoubleValueFunc {
    (x: number, y:number): number;
}

let doubleFunction: DoubleValueFunc = function(x: number, y: number) {
    return (x+y)*2;
}

console.log(doubleFunction(20,20));

//Interface Inheritance

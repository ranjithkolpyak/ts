export const PI:number = 3.14;

function logger(constructorFn: Function) {
    console.log(constructorFn);
}

@logger
class Employee {
    constructor() {
        console.log('Hello World!');
    }
}

//Factory

function logging(value: boolean) {
    return value ? logger : null;
}

@logging(true)
class Car {

}
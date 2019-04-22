export const PI:number = 3.14;

function logger(constructorFn: Function) {
    console.log(constructorFn);
}

// @logger
class Employee {
    constructor() {
        console.log('Hello World!');
    }
}

//Factory

function logging(value: boolean) {
    //you can put null for else case but the compiler throws error but you can still run though
    return value ? logger : null;
}

// @logging(true)
class Car {
    constructor() {
        console.log('Logging');
    }
}

//advanced decorators
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

// @logging(true)
@printable
class Plant {
    name: string = "Green Plant";
}

// const plant = new Plant();
// (<any>plant).print();

//method decorators

function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        // console.log(target);
        // console.log(propName);
        descriptor.writable = value;
    }
}

//Property Decorators
function overwritable(value: boolean) {
    return function(target: any, propName:string) : any{
        const newDescriptor: PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}

//parameter decorators
function printInfo(target: any, methodName: string, paramIndex: number){
    console.log(target, methodName, paramIndex);
}

class Project {
    // @overwritable(false)
    public name: string = "TS";

    constructor(@printInfo name:string) {
        this.name = name;
    }

    @editable(false)
    calcBudget(mode: string, @printInfo flag:boolean) {
        console.log(10000);
    }
}

const project = new Project("Typescript");
// project.calcBudget();
// project.calcBudget = function() {
//     console.log(100);
// }
// project.calcBudget();
// console.log(project);


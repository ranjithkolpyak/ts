class Person {
    name: string;
    private type!: string;
    protected age: number = 27;

    constructor(name: string, public userName:string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('Ranjith', 'ranjith425');
console.log(person);
person.printAge();
person.setType('Type');

class Ranjith extends Person {
    constructor(userName: string) {
        super("Ranjith", userName);
    }
}

const ranjith = new Ranjith('ranjith');
console.log(ranjith.name);

class Plant {
    private _species:string = 'Default';

    set species(value:string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }

    get species() {
        return this._species;
    }
}

const plant: Plant = new Plant();
console.log(plant.species);
plant.species = 'Special';
console.log(plant.species);

console.log('Static variables and functions');
class Helpers {
    static PI:number = 3.14;
    static circumference(diameter:number) : number {
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(Helpers.circumference(2));


abstract class Project {
    projectName: string = 'Default';
    budget: number = 100000;

    abstract changeName(name:string): void;

    calcBudget() {
        return this.budget*2;
    }
}

class ITProject extends Project{
    changeName(name: string): void {
        this.projectName = name;
    }
}

const project = new ITProject();
project.changeName("NNG");
console.log(project);


class Singleton {
    private static instance: Singleton;

    private constructor(public name:string){

    }

    static getInstance():Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton('The only one instance');
        }
        return Singleton.instance;
    }
}

console.log(Singleton.getInstance());

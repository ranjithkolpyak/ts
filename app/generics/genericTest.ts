export function echo(data: any) {
    return data;
}

export function genericEcho<T>(data: T) {
    return data;
}

//arrays and generics
var numbers: Array<number> = [10, 2.5, 25.25];
numbers.push(11);
// console.log(numbers);
// numbers.push("String"); this wont work becuase the compiler will throw error 

function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

// printAll(numbers);
// printAll<string>(['Banana', 'Mango', 'Berries']);

//Generic Types
//this is where you create a type for the generic to be reused
var echo2: <T>(data: T) => T;
echo2 = genericEcho;
console.log(echo2<string>('Hello World!'));
console.log(echo2<number>(25));

//Generic classes
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        //the + before variables is need for casting
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<number, string>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = "25";
console.log(simpleMath.calculate());
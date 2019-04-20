namespace MyMath {
    export const PI = 3.14;

    export function add(x:number, y:number): number {
        return x + y;
    }

    export function multiply(x:number, y:number): number {
        return x * y;
    }

    export function areaOfCircle(radius: number): number {
        return PI * radius * radius;
    }
}

console.log(MyMath.areaOfCircle(5));
console.log(MyMath.multiply(5, 5));
console.log(MyMath.PI);

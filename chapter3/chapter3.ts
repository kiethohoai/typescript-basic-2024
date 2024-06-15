//////////////// 38 TypeScript Static Methods and Properties //////////////
class Circle {
    static PI: number = 3.14;
    public test: number = 69;

    static caculateArea(radius: number) {
        return this.PI * radius * radius;
    }
}

// console.log("🚀CHECK  Circle.PI =", Circle.PI);
// console.log("🚀CHECK  Circle.caculateArea(10) =", Circle.caculateArea(10));

let dataCircle = new Circle();
console.log("🚀CHECK  dataCircle.test =", dataCircle.test);

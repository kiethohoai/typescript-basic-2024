//////////////// 36 TypeScript Getters and Setters //////////////
class Person {
    private _age: number;
    public fname: string;
    public address: string;

    constructor(age: number, fname: string, address: string) {
        this._age = age;
        this.fname = fname;
        this.address = address;
    }

    get age() {
        return this._age;
    }

    set age(inputAge) {
        if (inputAge < 0 || inputAge > 150) {
            throw Error("Invalid Age!");
        }
        this._age = inputAge;
    }
}

const dataPerson = new Person(30, "Ho Hoai Kiet", "Thua Thien Hue");
dataPerson.age = 100;
console.log("🚀CHECK  dataPerson =", dataPerson);
console.log("🚀CHECK  dataPerson.age =", dataPerson.age);

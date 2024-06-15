//////////////// 33 TypeScript "Classes" //////////////

class Person {
    id: number;
    fname: string;
    lname: string;

    constructor(id: number, fname: string, lname: string) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(): string {
        return `${this.id} ${this.fname} ${this.lname}`;
    }
}

const Data = new Person(132, "Hoai", "Kiet");
console.log("🚀CHECK  Data =>", Data);
console.log("🚀CHECK  Data.getFullName =>", Data.getFullName());

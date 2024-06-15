//////////////// 37 TypeScript Inheritance //////////////
class Person {
    fname: string;
    lname: string;

    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName() {
        return `FullName: ${this.fname} ${this.lname}`;
    }

    discribe() {
        return `This is ${this.fname} ${this.lname}`;
    }
}

class Owner extends Person {
    private jobTitle: string;
    constructor(fname: string, lname: string, jobTitle: string) {
        super(fname, lname);
        this.jobTitle = jobTitle;
    }

    get getJobTitle(): string {
        return this.jobTitle;
    }

    set setJobTitle(inputJobTitle: string) {
        this.jobTitle = inputJobTitle;
    }
}

let dataOwner = new Owner("ho hoai", "kiet", "software engineer");
// dataOwner.discribe()
// dataOwner.getFullName();
dataOwner.setJobTitle = "Fullstacks Web Developer";
console.log("🚀CHECK  dataOwner =", dataOwner);
console.log("🚀CHECK  dataOwner.discribe() =", dataOwner.discribe());
console.log("🚀CHECK  dataOwner.getFullName() =", dataOwner.getFullName());
console.log("🚀CHECK  dataOwner.getJobTitle =", dataOwner.getJobTitle);

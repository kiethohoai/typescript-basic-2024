//////////////// 34 TypeScript Access Modifiers //////////////
class Employee {
    private eCode: string;
    private eName: string;

    constructor(eCode: string, eName: string) {
        this.eCode = eCode;
        this.eName = eName;
    }
}

let eData = new Employee("30", "David");
// eData.eCode = "31";
// eData.eName = "David at 2025";
console.log("🚀CHECK  eData =>", eData);

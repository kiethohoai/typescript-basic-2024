//////////////// 34 TypeScript Readonly //////////////

class Person {
    readonly address: string;
    constructor(address: string) {
        this.address = address;
    }
}

const data = new Person("Thua Thien Hue");
data.address = "Da Nang"; //Error

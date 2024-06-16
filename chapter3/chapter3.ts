//////////////// 39 TypeScript Abstract Classes //////////////
abstract class Father {
  constructor(public firstName: string, public lastName: string) {
    //???
  }

  // abstract method
  abstract getSalary(): number;

  // normal method
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  dataEmployee(): string {
    return `${this.fullName} make ${this.getSalary()} in a month!`;
  }
}

abstract class Child extends Father {
  constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
    super(firstName, lastName);
  }
}

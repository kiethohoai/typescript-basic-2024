//////////////// 40 TypeScript Interfaces //////////////

// #1 - Not use Interface
// function getFullName(person: { fName: string; lName: string }) {
//   return `${person.fName} ${person.lName}`;
// }

// let person = {
//   fName: "Hoai ",
//   lName: "Kiet",
// };

// getFullName(person);
// console.log("🚀CHECK  getFullName(person) =", getFullName(person));

// #2 use Interface
interface Person {
  firstName: string;
  lastName: string;
}

function getFullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

let hhk = {
  firstName: "Ho Hoai",
  lastName: "Kiet",
  age: 30,
  address: "Thua Thien Hue",
};

// getFullName(hhk);
console.log("🚀CHECK  getFullName(hhk) =", getFullName(hhk));

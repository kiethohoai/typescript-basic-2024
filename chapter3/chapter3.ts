//////////////// 31 TypeScript Rest Parameters //////////////

//// #1
// function getTotal(...numbers: number[]): number {
//     let total = 0;
//     numbers.forEach((num) => (total += num));
//     return total;
// }

// // getTotal(10, 20, 30);
// console.log("🚀CHECK  getTotal(1, 2, 3) =>", getTotal(1, 2, 3));
// console.log("🚀CHECK  getTotal(10, 20, 30) =>", getTotal(10, 20, 30));

//// #2
// function getTotal(...numbers: number[]): number {
//     let total = 0;
//     numbers.map((num) => (total += num));
//     return total;
// }

// // getTotal(10, 20, 30);
// console.log("🚀CHECK  getTotal(1, 2, 3) =>", getTotal(1, 2, 3));
// console.log("🚀CHECK  getTotal(10, 20, 30) =>", getTotal(10, 20, 30));

//// #3
// function nhan(n: number, ...arr: number[]) {
//     return arr.map((a) => n * a);
// }
// console.log("🚀CHECK  nhan(10, 1, 2, 3, 4) =>", nhan(10, 1, 2, 3, 4));
// console.log("🚀CHECK  nhan(10, 10, 20, 30, 40) =>", nhan(10, 10, 20, 30, 40));

//// #4

const temp = (fname: string, ...lname: string[]): string => {
    // return fname + " " + lname.join(" ");
    return `${fname} ${lname.join(" ")}`;
};

// temp("Ho", "Hoai", "Kiet");
console.log("🚀CHECK  temp = ", temp("Ho", "Hoai", "Kiet"));

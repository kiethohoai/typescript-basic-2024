//////////////// 27 TypeScript Functions //////////////
// #1
// function sum(a: number, b: number): number {
//     return a + b;
// }
// console.log("🚀CHECK  sum(10, 90) =>", sum(10, 90));

// #2
// const sum = (a: number, b: number): number => {
//     return a + b;
// };

// // sum(10, 90);
// console.log("🚀CHECK  sum(10, 90) =>", sum(10, 90));

// #3
const sum = (a: number, b: number, c?: number): number => {
    if (c) return a + b + c;
    return a + b;
};

// sum(10, 90);
console.log("🚀CHECK  sum(10, 90) =>", sum(10, 90, 900));

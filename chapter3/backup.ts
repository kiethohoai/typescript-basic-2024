////////////// #20 TypeScript If else ///////////////
// let age: number = 30;
// if (age > 18) {
//     console.log("Your Good Age!");
// } else {
//     console.log("Your Bad Age!");
// }

////////////// #21 TypeScript Switch Case ///////////////
// const myAge: number = 30;

// switch (myAge) {
//     case 20:
//         console.log("You're 20 years old!");
//         break;
//     case 25:
//         console.log("You're 25 years old!");
//         break;
//     case 30:
//         console.log("You're 30 years old!");
//         break;
//     default:
//         console.log("How old are you?");
// }

////////////// 22 - TypeScript For Loop //////////////
// for (let i = 0; i < 10; i++) {
//     console.log("🚀CHECK  i =>", i);
// }

//////////////// 23 -  While Loop //////////////
// let count = 0;
// while (count < 10) {
//     console.log("🚀CHECK  count =>", count);
//     count++;
// }

//////////////// 24 Do While //////////////

// let i: number = 1;
// do {
//     console.log("🚀CHECK  i =>", i);
//     if (i === 3) {
//         break;
//     }
//     i++;
// } while (i <= 5);

//////////////// 25 Break //////////////

// #1
// let products = [
//     { name: "phone", price: 700 },
//     { name: "tablet", price: 900 },
//     { name: "laptop", price: 1200 },
// ];

// for (let i = 0; i < products.length; i++) {
//     if (products[i].price == 900) break;
//     console.log(products[i]);
// }

// #2
// let products = [
//     { name: "phone", price: 700 },
//     { name: "tablet", price: 900 },
//     { name: "laptop", price: 1200 },
// ];

// let discount = 0;
// let product = products[1];
// switch (product.name) {
//     case "phone":
//         discount = 5;
//         break;
//     case "tablet":
//         discount = 10;
//         break;
//     case "laptop":
//         discount = 15;
//         break;
//     default:
//         discount = 100;
// }
// console.log(`There is a ${discount}% on ${product.name}.`);

//////////////// 26 Continue //////////////

// for (let index = 0; index < 9; index++) {
//     if (index % 2) continue;
//     console.log(index);
// }

// let index = -1;
// while (index < 9) {
//     index = index + 1;
//     if (index % 2) continue;
//     console.log(index);
// }

// let index = 9;
// let count = 0;
// do {
//     index += 1;
//     if (index % 2) continue;
//     count += 1;
// } while (index < 99);
// console.log(count); // 45

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
// const sum = (a: number, b: number, c?: number): number => {
//     if (c) return a + b + c;
//     return a + b;
// };

// // sum(10, 90);
// console.log("🚀CHECK  sum(10, 90) =>", sum(10, 90, 900));

//////////////// 29 TypeScript Optional Parameters //////////////
// const sum = (a: number, b: number, c?: number): number => {
//     if (c) {
//         return a + b + c;
//     }

//     return a + b;
// };

// console.log("🚀CHECK  sum =>", sum(1, 2));

//////////////// 30 TypeScript Default Parameters //////////////
// let sum = (a: number, b: number, c: number = 900) => {
//     return a + b + c;
// };

// // sum(10, 90, 900);
// console.log("🚀CHECK  sum =>", sum(10, 90));
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
let products = [
    { name: "phone", price: 700 },
    { name: "tablet", price: 900 },
    { name: "laptop", price: 1200 },
];

let discount = 0;
let product = products[1];
switch (product.name) {
    case "phone":
        discount = 5;
        break;
    case "tablet":
        discount = 10;
        break;
    case "laptop":
        discount = 15;
        break;
    default:
        discount = 100;
}
console.log(`There is a ${discount}% on ${product.name}.`);

//////////////// 26 Continue  //////////////

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

let index = 9;
let count = 0;
do {
    index += 1;
    if (index % 2) continue;
    count += 1;
} while (index < 99);
console.log(count); // 45

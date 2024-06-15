//////////////// 30 TypeScript Default Parameters //////////////
let sum = (a: number, b: number, c: number = 900) => {
    return a + b + c;
};

// sum(10, 90, 900);
console.log("🚀CHECK  sum =>", sum(10, 90));

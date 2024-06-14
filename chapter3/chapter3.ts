//////////////// 29 TypeScript Optional Parameters //////////////
const sum = (a: number, b: number, c?: number): number => {
    if (c) {
        return a + b + c;
    }

    return a + b;
};

console.log("🚀CHECK  sum =>", sum(1, 2));

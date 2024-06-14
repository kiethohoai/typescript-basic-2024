type dataType = number | string | object | boolean;

function addNumberOrString(a: dataType, b: dataType) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
}

console.log("🚀CHECK  addNumberOrString =>", addNumberOrString("ONE", "TWO"));

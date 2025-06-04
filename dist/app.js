"use strict";
let val = "string"; // {} That's not undefined or null.
val = 45;
console.log("val: ", val);
const userRole = "admin";
function log(message) {
    console.log(message);
}
// will never complete
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// any = JavaScript
// unknown
function process(val) {
    if (typeof val === "object" &&
        !!val &&
        "log" in val &&
        typeof val.log === "function") {
        val.log();
    }
}
// Nullish Coalescing
let inputA = null;
const didProvideInputA = inputA || false; // false
let inputB = "";
const didProvideInputB = inputB || false; // string or false
let inputC = "";
const didProvideInputC = inputC ?? false; // string or false
//# sourceMappingURL=app.js.map
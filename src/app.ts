let val: {} = "string"; // {} That's not undefined or null.
val = 45;
console.log("val: ", val);

// Literal types
type Role = "admin" | "editor" | "guest";
const userRole: Role = "admin";

function log(message: string): void {
  console.log(message);
}

// will never complete
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

// any = JavaScript
// unknown
function processValue(val: unknown) {
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log();
  }
}

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest"; // optional type
};

// Nullish Coalescing
let inputA = null;
const didProvideInputA = inputA || false; // false
let inputB = "";
const didProvideInputB = inputB || false; // string or false
let inputC = "";
const didProvideInputC = inputC ?? false; // string or false

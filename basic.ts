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

type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type Results<T> = {
  [key in keyof T]: number;
};

const mathOperations: Operations = {
  add: (a, b) => a + b, // Implementation of add
  subtract: (a, b) => a - b, // Implementation of subtract
};

type OperationKeys = keyof Operations; // "add" | "subtract"

const mathResults: Results<Operations> = {
  add: mathOperations.add(5, 3), // Result of add operation
  subtract: mathOperations.subtract(5, 3), // Result of subtract operation
};

function performOperation<K extends OperationKeys>(
  operation: K,
  a: number,
  b: number
): Results<Operations>[K] {
  return mathOperations[operation](a, b);
}

const addResult = performOperation("add", 10, 5); // 15
const subtractResult = performOperation("subtract", 10, 5); // 5

// Optional properties in mapped types
type Operations2 = {
  readonly add?: (a: number, b: number) => number;
  readonly subtract?: (a: number, b: number) => number;
};

type Results2<T> = {
  -readonly [key in keyof T]-?: number; // The `-?` operator makes all  properties required
  // The `-readonly` operator removes the readonly modifier from properties
};

const mathOperations2: Operations2 = {
  add: (a, b) => a + b, // Implementation of add
  subtract: (a, b) => a - b, // Implementation of subtract
};

type OperationKeys2 = keyof Operations2; // "add" | "subtract"

const mathResults2: Results2<Operations2> = {
  add: mathOperations2.add ? mathOperations2.add(5, 3) : 0, // Result of add operation
  subtract: mathOperations2.subtract ? mathOperations2.subtract(5, 3) : 0, // Result of subtract operation
};

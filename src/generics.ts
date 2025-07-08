let names: Array<string> = ["John", "Doe"];

type DataStoreV2<T> = {
  [key: string]: T;
};

let storeV2: DataStoreV2<string | boolean> = {};
storeV2.name = "Alice";
storeV2.isInstructor = true;

let nameStore: DataStoreV2<string> = {};

function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: "max" }, { age: 30 });


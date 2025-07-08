type KUser = { name: string; age: number; email: string };
type KUserKeys = keyof KUser; // "name" | "age" | "email"
type KUserKeyType = KUser[KUserKeys]; // string | number
type KUserKeyTypeString = KUser["name"]; // string
type KUserKeyTypeNumber = KUser["age"]; // number
type KUserKeyTypeEmail = KUser["email"]; // string

function getProp<T extends object>(obj: T, key: keyof T) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error(`Property ${String(key)} does not exist on object`);
  }
  return val;
}

const kUser: KUser = {
  name: "John Doe",
  age: 30,
  email: "test@email.com",
};

const val2 = getProp(kUser, "name"); // "John Doe"


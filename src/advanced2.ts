type DataStore = {
  [key: string]: number | boolean;
};

let store: DataStore = {};

let someObj: Record<string, number | boolean>;

store.id = 5;
store.isActive = true;
someObj = {
  id: 10,
  isActive: false,
};

let roles = ["admin", "user", "guest"] as const;
// roles.push("superadmin"); // Error: Property 'push' does not exist on type 'readonly ["admin", "user", "guest"]'.

const fruits = ["apple", "banana", "orange"] as const;
const vegetables = ["carrot", "broccoli", "spinach"];

const dataEntries = {
  entry1: 0.51,
  entry2: "0.75",
} satisfies Record<string, any>;

// dataEntries.entry3 = 0.99; // This is allowed since we are using 'satisfies' to ensure the type

type DataEntries = typeof dataEntries;

const data2Entries = {
  entry1: 0.51,
  entry2: "0.0", // or any valid number
} as Record<string, any>;

data2Entries.entry3 = 0.99; // This is allowed since we are using 'as' to assert the type
type StringArray = string[];

// type ElementTYpe<T extends any[]> = T[number];

// type Example1 = ElementTYpe<StringArray>; // string

const text = 1;

// type Example2 = ElementTYpe<typeof text>;

type GetElementType<T> = T extends (infer U)[] ? U : never;
type Example1 = GetElementType<StringArray>; // string
type Example2 = GetElementType<typeof text>; // never

type FullnamePerson = { firstName: string; lastName: string };
type FullnameOrNothing<T> = T extends FullnamePerson ? string : never;

function getFullname<T extends object>(person: T): FullnameOrNothing<T> {
  if (
    "firstName" in person &&
    "lastName" in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
  }

  throw new Error("Invalid person object");
}

const name1 = getFullname({
  firstName: "John",
  lastName: "Doe",
}); // "John Doe"
const name2 = getFullname({}); // Error: Invalid person object

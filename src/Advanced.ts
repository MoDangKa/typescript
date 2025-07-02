class AdvanceUser {
  private _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (!name || name.length < 2) {
      throw new Error("First name must be at least 2 characters long.");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (!name || name.length < 2) {
      throw new Error("Last name must be at least 2 characters long.");
    }
    this._lastName = name;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  static eid = "ADVANCE_USER";
  static greet(): string {
    return "Hello from AdvanceUser!";
  }
}

const john = new AdvanceUser(); // TODO: Create an instance of AdvanceUser
john.firstName = "John";
john.lastName = "Doe";
console.log(john.fullName); // John Doe
console.log(AdvanceUser.eid); // ADVANCE_USER
console.log(AdvanceUser.greet()); // Hello from AdvanceUser!

class Employee extends AdvanceUser {
  private _employeeId: string = "";

  constructor(public jobTittle: string) {
    super();
    super.firstName = "Max";
    super.lastName = "Mustermann";
  }

  set employeeId(id: string) {
    if (!id || id.length < 5) {
      throw new Error("Employee ID must be at least 5 characters long.");
    }
    this._employeeId = id;
  }

  get employeeId(): string {
    return this._employeeId;
  }
}

const employee = new Employee("Software Engineer");
employee.employeeId = "EMP12345";
console.log(employee.fullName); // Max Mustermann
console.log(employee.jobTittle); // Software Engineer
console.log(employee.employeeId); // EMP12345

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string): void {
    console.log(
      `Cloning element with ID ${this.identifier} to ${targetLocation}`
    );
  }
}

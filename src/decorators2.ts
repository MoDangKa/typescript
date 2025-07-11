function Logger(constructor: Function) {
  console.log("Logging...");
  console.log("constructor: ", constructor);
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    if (typeof document !== "undefined") {
      const hookEl = document.getElementById(hookId);
      if (hookEl) {
        const p = new constructor();
        hookEl.innerHTML = template;
        hookEl.querySelector("h1")!.textContent = p.name;
      }
    }
  };
}

function WithTemplate2(template: string, hookId: string) {
  return function <T extends { new (...args: any): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template...");
        if (typeof document !== "undefined") {
          const hookEl = document.getElementById(hookId);
          if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = this.name;
          }
        }
      }
    };
  };
}

@Logger
@WithTemplate2("<h1>My Person Object</h1>", "app")
class TPerson {
  name: string = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new TPerson();
console.log(person);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log("target: ", target);
  console.log("propertyName: ", propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log("target: ", target);
  console.log("name: ", name);
  console.log("descriptor: ", descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log("target: ", target);
  console.log("name: ", name);
  console.log("descriptor: ", descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log("target: ", target);
  console.log("name: ", name);
  console.log("position: ", position);
}

class TProduct {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const product = new TProduct("Shoe", 19.99);
console.log(product);
console.log(product.getPriceWithTax(0.21));
console.log(product.title);

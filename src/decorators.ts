function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("logger decorator called");
  console.log("Target:", target);
  console.log("Context:", ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

function bind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    target.apply(this);
  };
}

function replacer<T>(initValue: T) {
  return function replacerDecorator(
    target: any,
    ctx: ClassFieldDecoratorContext
  ) {
    return (initializer: any) => {
      return initValue;
    };
  };
}

// @logger
class Person {
  @replacer("Default Name")
  name: string = "Max";

  constructor() {
    // this.greet = this.greet.bind(this);
  }

  @bind
  greet() {
    console.log("Hello, I am " + this.name);
  }
}

const person1 = new Person();
// person1.greet();
const greet = person1.greet;
greet(); // This will log "Hello, I am Max" because of the autoBind decorator

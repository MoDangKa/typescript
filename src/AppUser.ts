class AppUser {
  constructor(
    public name: string,
    public age: number,
    public role: "admin" | "guest" = "guest"
  ) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  log() {
    console.log(`User: ${this.name}, Age: ${this.age}, Role: ${this.role}`);
  }
}

const max = new AppUser("Max", 30);

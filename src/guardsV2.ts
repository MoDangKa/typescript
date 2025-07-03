class GUser {
  constructor(public name: string) {}
  join() {
    //..
  }
}

class GAdmin {
  constructor(public permissions: string[]) {}
  scan() {
    //..
  }
}

const gUser = new GUser("Alice");
const gAdmin = new GAdmin(["ban", "restore"]);

type Entity = GUser | GAdmin;


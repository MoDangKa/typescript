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

function init(entity: Entity) {
  if (entity instanceof GUser) {
    entity.join();
  } else if (entity instanceof GAdmin) {
    entity.scan();
  }
}
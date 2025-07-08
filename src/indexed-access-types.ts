const iUser: IUser = {
  name: "Jane Doe",
  age: 25,
  permissions: [
    {
      id: "1",
      title: "Admin",
      description: "Has full access to the system",
    },
    {
      id: "2",
      title: "User",
      description: "Has limited access to the system",
    },
  ],
};

type IUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = IUser["permissions"];

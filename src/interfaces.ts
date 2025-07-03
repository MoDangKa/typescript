interface Authenticatable {
  email: string;
  password: string;

  login(): Promise<void>;
  logout(): Promise<void>;
  isAuthenticated(): boolean;
}

class AuthenticatableUser implements Authenticatable {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  async login(): Promise<void> {
    console.log(`Logging in with email: ${this.email}`);
  }

  async logout(): Promise<void> {
    console.log(`Logging out user: ${this.email}`);
  }

  isAuthenticated(): boolean {
    return false; // Placeholder implementation
  }
}

let user: Authenticatable;

user = {
  email: "test@examle.com",
  password: "securepassword",
  login: async function () {
    console.log(`Logging in with email: ${this.email}`);
  },
  logout: async function () {
    console.log(`Logging out user: ${this.email}`);
  },
  isAuthenticated: function () {
    return false;
  },
};

function authenticateUser(auth: Authenticatable): void {
  if (auth.isAuthenticated()) {
    console.log("User is already authenticated.");
  } else {
    auth.login().then(() => {
      console.log("User logged in successfully.");
    });
  }
}
export class logIn {
  name: string;
  username: string;
  password: string;
  id: number;
  constructor(name: string, username: string, password: string, id: number) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.id = id;
  }
}

export class newPage {
  logIn: logIn;
  color: string;
  backgroundImage: string;
  name: string;
  theme: string;
  posts: object[];
  active: boolean = false;

  constructor(
    logIn: logIn,
    color: string,
    backgroundImage: string,
    name: string,
    theme: string,
    posts: object[],
    active: boolean = false
  ) {
    this.logIn = logIn;
    this.color = color;
    this.backgroundImage = backgroundImage;
    this.name = name;
    this.theme = theme;
    this.posts = posts;
    this.active = active;
  }
}

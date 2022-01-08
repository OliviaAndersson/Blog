export class logIn {
  username: string;
  password: string;
  id: number;
  constructor(username: string, password: string, id: number) {
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
  posts: [];

  constructor(
    logIn: logIn,
    color: string,
    backgroundImage: string,
    name: string,
    theme: string,
    posts: []
  ) {
    this.logIn = logIn;
    this.color = color;
    this.backgroundImage = backgroundImage;
    this.name = name;
    this.theme = theme;
    this.posts = posts;
  }
}

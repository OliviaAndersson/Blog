export class postPicture {
  header: string;
  date: string;
  picture: string;
  bread: string;

  constructor(header: string, date: string, picture: string, bread: string) {
    (this.header = header),
      (this.date = date),
      (this.picture = picture),
      (this.bread = bread);
  }
}

export class postNoPicture {
  header: string;
  date: string;
  bread: string;

  constructor(header: string, date: string, bread: string) {
    (this.header = header), (this.date = date), (this.bread = bread);
  }
}

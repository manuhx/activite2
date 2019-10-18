export class Post {

  private loveIts: number;
  private createdAt: Date;


  constructor(title: string, content: string) {
    this.loveIts = 0;
    this.createdAt = new Date();
  }

}

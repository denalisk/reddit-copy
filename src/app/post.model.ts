export class Post {
  public static idCounter: number = 1;
  public id: number;
  public upvotes: number = 0;
  constructor(public author: string, public text: string, public topic: string){
    this.id = Post.idCounter;
    Post.idCounter++;
  }
}

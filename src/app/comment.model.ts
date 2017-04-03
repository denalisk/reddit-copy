import { Post } from './post.model';

export class Comment {
  public static idCounter: number = 1;
  public id: number;
  public upvotes: number = 0;

  constructor(public author: string, public text: string, public ownerPostId: number) {
    this.id = Comment.idCounter;
    Comment.idCounter++;
  }
}

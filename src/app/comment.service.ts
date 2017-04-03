import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { COMMENTS } from './mock-comments';

@Injectable()
export class CommentService {

  constructor() { }

  getCommentsByPost(postId: number): Comment[] {
    let postComments: Comment[] = [];
    for(let index = 0; index < COMMENTS.length; index++) {
      if (COMMENTS[index].ownerPostId === postId) {
        postComments.push(COMMENTS[index]);
      }
    }
    return postComments;
  }

  getCommentById(commentId: number): Comment {
    for(let index = 0; index < COMMENTS.length; index++) {
      if (COMMENTS[index].id === commentId) {
        return COMMENTS[index];
      }
    }
  }

  saveComment(newComment) {
    COMMENTS.push(newComment);
  }

}

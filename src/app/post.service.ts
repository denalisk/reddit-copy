import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS;
  }

  getPostById(postID: number) {
    for(var i = 0; i < POSTS.length; i++) {
      if (POSTS[i].id === postID) {
        return POSTS[i];
      }
    }
  }

  public savePost(newPost: Post): void {
    POSTS.push(newPost);
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {
  public newTitle: string = null;
  public newTopic: string = null;
  public newText: string = null;
  public newAuthor: string = null;

  constructor(public postService: PostService, public router: Router) { }

  ngOnInit() {
  }

  public clickedSaveButton(): void {
    var newPost = new Post(this.newAuthor, this.newText, this.newTopic, this.newTitle);
    this.postService.savePost(newPost);
    this.router.navigate(['post', newPost.id])

  }
}

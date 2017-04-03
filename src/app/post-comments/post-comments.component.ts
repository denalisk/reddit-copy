import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment.model';
import { Post } from '../post.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css'],
  providers: [CommentService]
})
export class PostCommentsComponent implements OnInit {
  @Input() currentPost: Post;
  public commentArray: Comment[];


  constructor(public commentService: CommentService) { }

  ngOnInit() {
    this.commentArray = this.commentService.getCommentsByPost(this.currentPost.id);
  }

}

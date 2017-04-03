import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment.model';
import { Post } from '../post.model';
import { CommentService } from '../comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
  providers: [CommentService]
})
export class NewCommentComponent implements OnInit {
  @Input() currentPost: Post;

  public newAuthor: string;
  public newText: string;

  constructor(public commentService: CommentService, public router: Router) { }

  ngOnInit() {
  }

  clickedSaveButton(): void {
    var newComment = new Comment(this.newAuthor, this.newText, this.currentPost.id);
    this.commentService.saveComment(newComment);
    this.router.navigate(['post', this.currentPost.id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router';
import { Post } from '../post.model';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  isBeingEdited: boolean = false;

  postId: number = null;
  postToDisplay: Post;

  constructor(public postService: PostService,
          public location: Location,
          public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((urlParam) => {
      this.postId = parseInt(urlParam['id']);
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
  }

  // isBeingEdited -  if we need this

}

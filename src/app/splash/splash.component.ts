import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';



@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [PostService]
})
export class SplashComponent implements OnInit {
  postsArray: Post[];

  constructor(public postService: PostService, public router: Router) { }

  ngOnInit() {
    this.postsArray = this.postService.getPosts();

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  public editTitle: string;
  public editTopic: string;
  public editText: string;
  public editAuthor: string;

  constructor() { }

  ngOnInit() {
  }

}

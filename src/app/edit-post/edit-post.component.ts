import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})

export class EditPostComponent {
  @Input() currentPost: Post;
  @Output() updateSender = new EventEmitter();

  public clickedSaveButton(): void {
    this.updateSender.emit()
  }

}

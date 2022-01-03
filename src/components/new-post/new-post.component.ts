import { Component, OnInit } from '@angular/core';

import { Technologies } from "../../app/models/technologies";
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../app/services/post/post.service";
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public newPostForm: FormGroup;

  technologyStack: Technologies[] = [
    {id: 1, value: 'JS'},
    {id: 2, value: 'Python'},
    {id: 3, value: 'C++'},
    {id: 4, value: 'C'},
    {id: 5, value: 'Rust'},
    {id: 6, value: 'Java'},
    {id: 7, value: 'C#'},
  ]

  constructor(private postService: PostService, public dialogRef: MatDialogRef<NewPostComponent>) {
    this.newPostForm = new FormGroup({
      title: new FormControl(null),
      text: new FormControl(null),
      technology: new FormControl(null),
    })
  }

  ngOnInit(): void {
  }

  submit(e: Event): void {
    this.postService.createNewPost(this.newPostForm.value.title, this.newPostForm.value.text, this.newPostForm.value.technology)
      .then(() => this.dialogRef.close())
  }
}

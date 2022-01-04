import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../app/services/post/post.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../app/models/posts";

@Component({
  selector: 'app-post-more',
  templateUrl: './post-more.component.html',
  styleUrls: ['./post-more.component.css']
})
export class PostMoreComponent implements OnInit {

  public newCommentForm: FormGroup;
  post: Post = {};

  constructor(private postService: PostService, private route: ActivatedRoute, private location: Location) {
    this.newCommentForm = new FormGroup({
      answer: new FormControl(null),
    })
  }

  ngOnInit(): void {
    this.getCurrentPost();
  }

  routeBack(): void {
    this.location.back();
  }

  setNewComment(e: Event) {
    const id = this.route.snapshot.paramMap.get('id')

    this.postService.setComment(this.newCommentForm.value.answer, id || '');
    this.newCommentForm.reset();
    this.getCurrentPost()
  }

  getCurrentPost() {
    const id = this.route.snapshot.paramMap.get('id')

    this.postService.getPost(id || '').subscribe((doc) => {
      if (doc.exists) {
       this.post = doc.data() as object;
      } else {
        this.post = {}
      }
    });

  }
}

import { Component, OnInit } from '@angular/core';
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

  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.newCommentForm = new FormGroup({
      answer: new FormControl(null),
    })
  }

  ngOnInit(): void {
    this.getCurrentPost();
  }

  getCurrentPost() {
    const id = this.route.snapshot.paramMap.get('id')

    this.postService.getPost(id || '').subscribe((doc) => {
      if (doc.exists) {
       this.post = doc.data() as object;
        console.log(this.post)
      } else {
        this.post = {}
      }
    });

  }
}

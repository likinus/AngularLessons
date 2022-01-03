import { Component, OnInit } from '@angular/core';

import {PostService} from "../../app/services/post/post.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public userLogin: string | null = '';

  constructor(private postService: PostService ) { }

  ngOnInit(): void {
    this.userLogin = sessionStorage.getItem('user');

    this.postService.getAllPosts();
  }

  getPosts() {
    return this.postService.posts;
  }

  openPost(postId?: string): void {
    this.postService.openPostMore(postId)
  }
}

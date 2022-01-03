import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';
import {Post} from "../../app/models/posts";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  myMoment = moment().format('D MMM YYYY');
  @Input() post: Post = { title: '', postText: '', tech: '', id: ''};

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../app/models/posts';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comment: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

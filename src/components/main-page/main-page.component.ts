import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public userLogin: string | null = ''

  constructor() { }

  ngOnInit(): void {
    this.userLogin = sessionStorage.getItem('user')
  }

}

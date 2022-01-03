import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';

import {AuthService} from "../../app/services/auth/auth.service";
import {NewPostComponent} from "../new-post/new-post.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMainPage: boolean = false;

  constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        this.isMainPage = url === '/main' || url === '/post';
      }
    })
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewPostComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout() {
    this.authService.logOut()
  }

}

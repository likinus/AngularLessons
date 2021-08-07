import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import {AuthService} from "../../app/services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMainPage: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        this.isMainPage = url === '/main';
      }
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logOut()
  }

}

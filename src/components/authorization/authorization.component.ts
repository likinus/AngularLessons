import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../app/services/auth/auth.service";
import { Router } from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public loginForm: FormGroup;
  public error: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null),
    })
  }

  signIn(event: Event): void {
    event.preventDefault();

    this.authService.signIn(this.loginForm.value.login, this.loginForm.value.password)
      .then(() => {
        this.router.navigate(['/main']);
      }).catch(error => {
        this.error = error.message;
        console.log(error.message);
    });
  }

  googleSignIn(event: Event): void {
    event.preventDefault();

    this.authService.signInWithGoogle()
      .then(() => this.router.navigate(['/main'])).catch(error => {
        this.error = error.message;
        console.log(error.message)
    });
  }

  facebookSignIn(event: Event): void {
    event.preventDefault();

    this.authService.signInWithFacebook()
      .then(() => this.router.navigate(['/main'])).catch(error => {
        this.error = error.message;
        console.log(error.message)
    });
  }

  githubSignIn(event: Event): void {
    event.preventDefault();

    this.authService.signInWithGit()
      .then(() => this.router.navigate(['/main'])).catch(error => {
        this.error = error.message;
        console.log(error.message)
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../../app/services/auth/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registerForm: FormGroup;
  public error: string = '';

  constructor( private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(event: Event): void {
    event.preventDefault();
    this.authService.signUp(this.registerForm.value.login, this.registerForm.value.password)
      .then(() => this.router.navigate(['/main'])).catch(error => {
        this.error = error.message;
        console.log(error.message)
    });
  }

  ngOnInit(): void {
  }

}

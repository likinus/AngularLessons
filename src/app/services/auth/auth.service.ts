import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData: any;
  public isAuthorized: boolean = false;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.isAuthorized = !!sessionStorage.getItem('user');
  }

  signIn(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password).then(data => {
      this.userData = data.user;

      sessionStorage.setItem('user', email);
      this.isAuthorized = true;

      return this.userData;
    })
  }

  signUp(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(data => {
      sessionStorage.setItem('user', email);
      this.isAuthorized = true;

      this.userData = data.user;

      return this.userData;
    })
  }

  signInWithGoogle() {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data => {
      if (data?.user?.email) {
        sessionStorage.setItem('user', data?.user?.email);
      }
      this.isAuthorized = true;

      this.userData = data.user;
      return this.userData;
    })
  }

  signInWithGit() {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(data => {
      if (data?.user?.email) {
        sessionStorage.setItem('user', data?.user?.email);
      }
      this.isAuthorized = true;

      this.userData = data.user;
      return this.userData;
    })
  }

  signInWithFacebook() {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(data => {
      if (data?.user?.email) {
        sessionStorage.setItem('user', data?.user?.email);
      }
      this.isAuthorized = true;

      this.userData = data.user;
      return this.userData;
    })
  }

  logOut() {
    return this.firebaseAuth.signOut().then(data => {
      console.log(data);
      this.router.navigate(['/login'])
      this.userData = null;

      sessionStorage.removeItem('user');
      this.isAuthorized = false;
    })
  }
}

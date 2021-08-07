import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from '../components/authorization/authorization.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import {MainPageGuard} from "../components/main-page/main-page.guard";

const firebaseConfig = {
  apiKey: "AIzaSyC2X69kHXcPPiXFIEtkiZVPwVQyNe-vlRg",
  authDomain: "hometask-872c2.firebaseapp.com",
  databaseURL: "https://hometask-872c2.firebaseio.com",
  projectId: "hometask-872c2",
  storageBucket: "hometask-872c2.appspot.com",
  messagingSenderId: "387666902623",
  appId: "1:387666902623:web:0f265f84ab67809ae9a5ea"
};

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegistrationComponent,
    HeaderComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    ReactiveFormsModule,
    // storage
  ],
  providers: [MainPageGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

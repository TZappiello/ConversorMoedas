import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page401Component } from './page401/page401.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page401Component,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   // EditComponent,  // esse aqui é do criar contato
    AngularFireModule.initializeApp({
      
        apiKey: "AIzaSyDIYU8zD2NklsevTAtpnrR6rcJS4kshlpI",
        authDomain: "conversor-moedas.firebaseapp.com",
        projectId: "conversor-moedas",
        storageBucket: "conversor-moedas.appspot.com",
        messagingSenderId: "569191487743",
        appId: "1:569191487743:web:a099eb530b7e76f12894ca",
        measurementId: "G-CMZTVD95Q5"
      
    }),AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

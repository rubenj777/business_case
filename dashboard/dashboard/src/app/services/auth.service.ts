import { EventEmitter, Injectable, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getAllJSDocTags } from 'typescript';
import { User } from '../user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user')!);
    console.log(this.user.isConnected);
  }

  localStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
    let getData = JSON.parse(localStorage.getItem('user')!);
    console.log(getData.isConnected);
  }

  login() {
    this.user.isConnected = true;
    this.localStorage();
  }

  logout() {
    this.user.isConnected = false;
    this.localStorage();
  }
}

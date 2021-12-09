import { EventEmitter, Injectable, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getAllJSDocTags } from 'typescript';
// import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connected } from 'process';

type DataLoginServ = {
  token: string;
  email: string;
  id: string;
  updatedAt: string;
};

type DataStatsServ = {
  recurrence: number;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // public user: User;
  private api_url =
    'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/';
  private token: string = '';
  public connected = false;
  public recurrence!: number;

  constructor(private http: HttpClient) {
    this.connected = JSON.parse(localStorage.getItem('connected')!);
    console.log(this.connected);
  }

  localStorage() {
    localStorage.setItem('connected', JSON.stringify(this.connected));
    let getData = JSON.parse(localStorage.getItem('connected')!);
    console.log(getData.connected);
  }

  login(email: string, password: string) {
    // this.user.isConnected = true;
    // this.localStorage();
    this.http
      .post(
        this.api_url + 'login',
        JSON.stringify({
          email: 'ruben@hb.fr',
          password: 'password',
        })
      )
      .toPromise()
      .then(
        (data) => {
          let dataServ = data as DataLoginServ;
          this.token = dataServ.token;
          this.connected = true;
        },
        (err) => {
          console.log(err.status);
        }
      );
  }

  getStats() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    this.http
      .get(this.api_url + 'stats/2001-01-01/2004-01-01', httpOptions)
      .toPromise()
      .then(
        (res) => {
          let dataReceived = res as DataStatsServ;
          this.recurrence = dataReceived.recurrence;
          console.log(dataReceived);
        },
        (err) => {
          console.log(err.status);
        }
      );
  }

  logout() {
    this.connected = false;
    this.localStorage();
  }
}

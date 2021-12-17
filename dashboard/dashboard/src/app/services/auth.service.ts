import { EventEmitter, Injectable, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getAllJSDocTags } from 'typescript';
// import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private api_url =
    'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/';
  private token: string = '';
  public connected = false;
  public recurrence!: number;
  // public getData(): Observable<Object> {
  //   return this.clientHttp.get(
  //     'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/'
  //   );
  // }

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Promise<boolean> {
    return this.http
      .post(
        this.api_url + 'login',
        JSON.stringify({
          email: email,
          password: password,
        })
      )
      .toPromise()
      .then(
        (data) => {
          let dataServ = data as DataLoginServ;
          this.token = dataServ.token;
          this.connected = true;
          localStorage.setItem('connected', 'true');
          console.log(data);
          return true;
        },
        (err) => {
          this.logout();
          return false;
          console.log(err.status);
        }
      );
  }

  logout(): any {
    this.connected = false;
    localStorage.setItem('connected', 'false');
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

          return true;
        },
        (err) => {
          return false;
          console.log(err.status);
        }
      );
  }
}

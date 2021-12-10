import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // private api_url =
  //   'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/';
  public email = 'ruben@hb.fr';
  public password = 'password';
  private token!: string;
  public isConnected = false;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.auth.login(this.email, this.password).then((res: boolean) => {
      if (res) {
        this.router.navigate(['/general']);
      } else {
        alert('id incorrect');
      }
    });
  }
}

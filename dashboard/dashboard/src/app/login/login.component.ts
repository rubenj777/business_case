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
  public email!: string;
  public password!: string;
  constructor(private router: Router, private auth: AuthService) {
    // if (this.auth.user.isConnected) {
    //   this.router.navigate(['/general']);
    // }
    if (this.auth.connected) {
      this.router.navigate(['/general']);
    }
  }

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.auth.login(this.email, this.password);

    // this.router.navigate(['/general']);
  }
}

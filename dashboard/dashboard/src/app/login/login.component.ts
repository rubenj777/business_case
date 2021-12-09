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
  public id!: string;
  public password!: string;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.auth.login();
    this.router.navigate(['/general']);
  }
}

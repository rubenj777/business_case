import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent implements OnInit {
  public id!: string;
  public password!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.router.navigate(['/general']);
  }
}

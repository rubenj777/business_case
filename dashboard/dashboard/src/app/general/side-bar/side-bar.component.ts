import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatStartDate } from '@angular/material/datepicker';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  public startDate!: Date;
  public endDate!: Date;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  getDate() {
    console.log(this.startDate);
  }

  logout() {
    this.auth.logout();
  }
}

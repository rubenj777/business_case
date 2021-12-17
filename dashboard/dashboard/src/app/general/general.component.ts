import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  public getData: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getData = this.auth.getStats();
  }
}

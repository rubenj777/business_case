import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // @ViewChild('toggle') toggle: ElementRef;

  public email = '';
  public password = '';
  private token!: string;
  public loginError!: boolean;
  public getData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private renderer: Renderer2
  ) {
    // this.renderer.listen('window', 'click', (e:Event) => {
    //   if(e.target !== this.toggle.nativeElement && e.target!==this.)
    // })
  }

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.auth.login(this.email, this.password).then((res: boolean) => {
      if (res) {
        this.loginError = false;
        this.router.navigate(['/general']);
      }
      this.loginError = true;
    });
  }
}

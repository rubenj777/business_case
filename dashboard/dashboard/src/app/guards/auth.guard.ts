import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return this.authServ.connected;
  }
  constructor(public authServ: AuthService) {}
}

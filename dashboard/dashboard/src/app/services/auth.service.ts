import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: {
    id: string;
    isConnected: boolean;
  };

  constructor() {
    this.user = { id: 'ruben', isConnected: true };
    localStorage.setItem('user', JSON.stringify(this.user));
    let getData = localStorage.getItem('user')!;
    JSON.parse(getData);
  }
}

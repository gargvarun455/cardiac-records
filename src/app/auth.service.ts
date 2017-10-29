import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private isLoggedIn = false;

  constructor() { }

  getLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }

  setLoggedInStatus(status: boolean) {
    this.isLoggedIn = status;
  }

}

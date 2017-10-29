import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private isLoggedIn = false;

  constructor() { }

  authorizeUser(username: String, password: String): boolean {
    /* if (username == "admin" && password == "admin") {
      return true;
    }
    else {
      return false;
    } */
    
  }

  getLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }

  setLoggedInStatus(status: boolean) {
    this.isLoggedIn = status;
  }

  getLoggedInUser(): String {

    
  }

  setLoggedInUser(username: String) {

  }

}

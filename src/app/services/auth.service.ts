import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CryptoService } from './crypto.service';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private isLoggedIn = false;
  private loggedInUser = "";
  
  constructor(private crypto: CryptoService, private http: Http) { }

  getLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }
  setLoggedInStatus(status: boolean) {
    this.isLoggedIn = status;
  }
  getLoggedInUser(): string {
    return this.loggedInUser
  }
  setLoggedInUser(username: string) {
    this.loggedInUser = username;
  }

  authenticateUser(username: string, password: string) {
    var cryptpassword = this.crypto.encrypt(password);
    var request = { username: username, 
                    password: cryptpassword};
    return this.http.post('/api/authUser', request)
      .map((res: Response) => res.json());
  }

}

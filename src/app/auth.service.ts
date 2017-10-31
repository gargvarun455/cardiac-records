import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private isLoggedIn = false;

  constructor(private http: Http) { }

  getLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }

  setLoggedInStatus(status: boolean) {
    this.isLoggedIn = status;
  }

  authenticateUser(username: String, password: String) {
    var request = { username: username, password: password };
    return this.http.post('http://localhost:3000/api/authUser', request)
      .map((res: Response) => res.json());
  }

}

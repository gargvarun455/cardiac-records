import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { CryptoService } from './crypto.service';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  
  constructor(private crypto: CryptoService, 
              private http: Http,
              private httpC: HttpClient) { }

  authenticateUser(username: string, password: string) {
    var cryptpassword = this.crypto.encrypt(password);
    var request = { username: username, 
                    password: cryptpassword};
    return this.http.post('/api/authUser', request)
      .map((res: Response) => res.json());
  }

  verifyUsername(username: string){ 
    return this.httpC.get('/api/user/' + username);
  }
}

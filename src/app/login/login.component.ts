import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authResponse: any = { username: '', authenticated: '' };

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  userLogin() {
    this.authService.authenticateUser('varun', 'garg')
      .subscribe((res) => this.authResponse = res,
      (err) => console.log(err),
      () => {
        if (this.authResponse.authenticated) {
          this.router.navigate(['/dashboard']);
        }
      });
  }

  log(x){
    console.log(x);
  }

}

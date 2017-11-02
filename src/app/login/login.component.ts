import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CryptoService } from '../services/crypto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authResponse: any = { username: '', authenticated: '' };
  loginForm: FormGroup;
  post: any;
  description: string = "";
  name: string = "";

  constructor(private crypto: CryptoService, 
              private authService: AuthService,
              private router: Router, 
              private fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': [null, Validators.compose(
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern("[a-zA-Z][a-zA-Z0-9]+")])],
      'password': [null, Validators.compose(
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        Validators.pattern("[a-zA-Z0-9@#!%^&]+")])],
    });
  }

  ngOnInit() {
  }

  userLogin(form) {
    this.authService.authenticateUser(form.username, form.password)
      .subscribe((res) => this.authResponse = res,
      (err) => console.log(err),
      () => {
        if (this.authResponse.authenticated) {
          sessionStorage.auth = this.crypto.encrypt(form.username);
          this.router.navigate(['/dashboard']);
        }
      });
  }

  log(x) {
    console.log(x);
  }

}

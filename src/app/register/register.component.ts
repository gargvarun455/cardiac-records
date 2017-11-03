import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CryptoService } from '../services/crypto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any;
  registerForm: FormGroup;

  constructor(private crypto: CryptoService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
    this.registerForm = fb.group({
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
      'confirmPass': [null, Validators.compose(
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        Validators.pattern("[a-zA-Z0-9@#!%^&]+")])],
      'emailid': [null, Validators.compose(
        [Validators.required,
        Validators.email])]
    }, { validator: this.matchPasswords('password', 'confirmPass') });
  }

  ngOnInit() {
  }

  verifyUsername() {
    this.authService
      .verifyUsername(this.registerForm.controls['username'].value)
      .subscribe((res) => this.user = res,
      (err) => console.log(err),
      () => {
        console.log(this.user);
      });
  }

  matchPasswords(password: string, confirmPass: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[password],
        confirmPassInput = group.controls[confirmPass];
      if (passwordInput.value !== confirmPassInput.value) {
        return confirmPassInput.setErrors({ notEquivalent: true })
      }
      else {
        return confirmPassInput.setErrors(null);
      }
    }
  }

  log(x) {
    console.log(x);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authResponse;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  userLogin() {
    this.authService.authenticateUser('varun', 'garg')
      .subscribe(res => this.authResponse = res);
    console.log(this.authResponse.);
  }

}

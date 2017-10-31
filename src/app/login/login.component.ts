import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authResponse: any = { username: '', authenticated: '' };
  private router;

  constructor(private authService: AuthService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  userLogin() {
    console.log('test');
    this.authService.authenticateUser('varun', 'garg')
      .subscribe((res) => this.authResponse = res,
      (err) => console.log(err),
      () => {
        console.log(this.authResponse)
      });
    /* if (this.authResponse.authenticated == true) {
      this.router.navigate('dashboard');
    } */
  }

}

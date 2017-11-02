/// <reference types="crypto-js" />

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;

  constructor(private crypto: CryptoService, 
              private router: Router) { }

  ngOnInit() {
    if (!sessionStorage.auth) {
      this.router.navigate(['/']);
    }
    else{
      this.username = this.crypto.decrypt(sessionStorage.getItem("auth"));
    }
  }



}

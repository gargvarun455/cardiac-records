/// <reference types="crypto-js" />

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!sessionStorage.authUser) {
      this.router.navigate(['/']);
    }
    var myString = "https://www.titanesmedellin.com/";
    var myPassword = "myPassword";
    var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
    var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
    console.log('Encrypted :' + encrypted);
    console.log('Decrypted : ' + decrypted.toString(CryptoJS.enc.Utf8));

  }



}

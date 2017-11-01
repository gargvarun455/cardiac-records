import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CryptoService {  

  constructor() { }

  encrypt(myString: string): string{
    return CryptoJS.AES.encrypt(myString, environment.secret_key).toString();
  }

}

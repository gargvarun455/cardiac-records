import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CryptoService {  

  constructor() { }

  encrypt(myString: string): string{
    return CryptoJS.AES.encrypt(myString, environment.secret_key).toString();
  }

  decrypt(encryptedString: string): string{
    return CryptoJS.AES.decrypt(encryptedString, environment.secret_key).toString(CryptoJS.enc.Utf8);
  }

}

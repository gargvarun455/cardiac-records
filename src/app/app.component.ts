import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HomeComponent]
})
export class AppComponent {
  title = 'app';

  constructor(auth: AuthService) {
    console.log(auth.getLoggedInStatus());
    auth.setLoggedInStatus(true);
    console.log(auth.getLoggedInStatus());
  }

}

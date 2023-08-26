import { User } from 'src/shared/interfaces/User';
import { Component } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  user$ :Observable<User | null> = this.authService.getUser();
  constructor(private authService: AuthService){
    console.log("user",this.user$)
   
  }
}

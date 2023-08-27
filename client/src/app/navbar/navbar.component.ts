import { User } from './../../shared/interfaces/User';
import { Router } from '@angular/router';
import { Component,  Input } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
 
  @Input() user: User | null = null;

  
  constructor(private authService:AuthService, private router:Router){

  }

  handleSignOut():void{
    this.authService.signOut();
    this.router.navigateByUrl("/auth/login")
    this.authService.getUserToken();
  }
}

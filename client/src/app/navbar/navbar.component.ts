import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  user:any = ""
  constructor(private authService:AuthService, private router:Router){

  }
  ngOnInit(){
   this.user =  this.authService.getUser();
  }
  handleSignOut():void{
    this.authService.signOut();
    this.router.navigateByUrl("/auth/login")
  }
}

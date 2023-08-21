import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  email: string | null = null;
  password: string | null = null;
  errorMsg: string = "";

  constructor(private router: Router,  private authService: AuthService) {}

  handleLogin(): void {
    if(this.errorMsg !== ""){
      this.errorMsg = "";
    }
   
    this.authService.Login(this.email!, this.password!)
    .subscribe({
      next:(value)=>{
        this.authService.setUser(value.existingUser)
      },  
      error:(err)=>{
        this.errorMsg = err.error;

      },


    })
  }
}

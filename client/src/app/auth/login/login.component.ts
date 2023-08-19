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

  constructor(private router: Router,  private authService: AuthService) {}

  handleLogin(): void {
    console.log(this.email!, this.password!)
    this.authService.Login(this.email!, this.password!).subscribe(()=>{
      this.router.navigateByUrl('/');
    })
  }
}

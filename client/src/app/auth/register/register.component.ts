import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  constructor(private router: Router,  private authService: AuthService) {}

    formData = new UntypedFormGroup({
      first_name:  new UntypedFormControl('', [Validators.required]),
      last_name: new UntypedFormControl('', [Validators.required]),
      email:new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
      confirm_password: new UntypedFormControl('', 
      [Validators.required]
      
      ),

    })
  
  handleRegister():void{
   this.authService
      .Register( this.formData.getRawValue())
      .subscribe(() => {
        
      });
      this.router.navigate(['/login']);
  }
}

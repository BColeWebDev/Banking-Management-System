import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { User } from 'src/shared/interfaces/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  errors: string[] =[]
  constructor(private router: Router,  private authService: AuthService) {
    this.errors = this.errors
  }

    formData = new UntypedFormGroup({
      first_name:  new UntypedFormControl('', [Validators.required]),
      last_name: new UntypedFormControl('', [Validators.required]),
      email:new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
      confirm_password: new UntypedFormControl('', 
      [Validators.required]
      
      ),

    })
    ngOnInit() {
    console.log("called")
    }
  handleRegister():void{

   this.authService
      .Register( this.formData.getRawValue())
      .subscribe({
        next: (value) => {
          this.router.navigate(['/login']) 
        },
        error:(err) => {
         this.errors = err.error.errors
        },
      });      
  }

}

import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    imports: [SharedModule,AuthRoutingModule],
    declarations: [LoginComponent,RegisterComponent],

})
export class AuthModule { }

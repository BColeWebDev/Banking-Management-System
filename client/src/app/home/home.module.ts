import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeRoutingModule } from './home.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [SharedModule,HomeRoutingModule, CommonModule],
    declarations: [CreateAccountComponent,DashboardComponent],

})
export class HomeModule{}
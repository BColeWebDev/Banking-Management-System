import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes =[
    {
        path:"createAccount",
        component:CreateAccountComponent
    },
    {
        path:"",
        component:DashboardComponent
    }
]


export const HomeRoutingModule = RouterModule.forChild(routes);
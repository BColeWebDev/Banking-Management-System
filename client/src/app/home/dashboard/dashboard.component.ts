import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Accounts } from 'src/shared/interfaces/Account';
import { AccountsServices } from 'src/shared/services/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
allAccounts$:Accounts [] | null = null
constructor(private accountsService: AccountsServices, private router:Router){

}
ngOnInit(){
  this.accountsService.getAllAccounts("64e23f603deab4c354cfeb31").subscribe( response =>{
    this.allAccounts$ = response
    
   })
}
toCreateAccPage(){
this.router.navigateByUrl("home/createAccount")
}
handleWithdrawalFunds(){

}
handleDepositFunds(){

}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from '../interfaces/Account';
import { tap, Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class AccountsServices{
    constructor(private http:HttpClient){

    }
    getAllAccounts(id:string):Observable<Accounts[]>{

    return this.http.get<Accounts[]>(`http://localhost:8000/api/accounts/${id}`)
    }
}
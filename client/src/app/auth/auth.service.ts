import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/shared/interfaces/User';
import { Observable, tap } from 'rxjs';

interface AuthResponse{
    token:string
    user:User
}
@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http: HttpClient){}
    Login(email:string,password:string) {
        return this.http.post<AuthResponse>(`http://localhost:8000/api/auth/login`,{email,password}).pipe(tap((data)=>{
            console.log(data)
        }))
        
    };
    Register(user:User):Observable<User>{
        return this.http.post<User>(`http://localhost:8000/api/auth/register`,{user}).pipe(tap((data)=>{
            console.log(data)
        }))
    };
}
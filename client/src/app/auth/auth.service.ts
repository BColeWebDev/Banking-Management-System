import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/shared/interfaces/User';
import { Observable, catchError, tap, BehaviorSubject, pluck } from 'rxjs';
import { TokenStorage } from './token.storage';
interface AuthResponse{
    userToken:string
    existingUser:User
}
@Injectable({providedIn:'root'})
export class AuthService{
 
    private user$ = new BehaviorSubject<User | null>(null);
    constructor(private http: HttpClient,private tokenStorage: TokenStorage){
    
        console.log("called",this.user$)
   

    }
    Login(email:string,password:string) {
        return this.http.post<AuthResponse>(`http://localhost:8000/api/auth/login`,{email,password}).pipe(
        
            tap(({userToken,existingUser})=>{
                this.setUser(existingUser)
                this.tokenStorage.saveToken(userToken);
                this.tokenStorage.saveCurrentUser(existingUser);
            },
            (error)=>{
                console.log("error",error)
            })
        )
    };
    Register(user:User):Observable<User>{
        return this.http.post<User>(`http://localhost:8000/api/auth/register`,{user})
            .pipe(
                tap((data)=>data),            
            )
    };
    setUser(user: User | null): void {
        this.user$.next(user);
    }
    signOut():void{
        this.tokenStorage.signOut();
        this.setUser(null);
    }
    getUserToken(){
        return this.tokenStorage.getToken()
    }
    getUser() : Observable<User | null>{
        return this.user$.asObservable()
    }
}
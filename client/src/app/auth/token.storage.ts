import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })

export class TokenStorage {
    signOut(): void {
        localStorage.removeItem("userToken");
        localStorage.clear();
      }
    saveToken(token?:string){
        if (!token) return;
        localStorage.setItem("userToken", token);
    }
    saveCurrentUser(user?:any){
      if (!user) return;
      localStorage.setItem("currentUser", JSON.stringify(user));
  }

    
    getToken(): string | null {
        return localStorage.getItem("userToken");
      }
      getCurrentUser() {
        let data:any= localStorage.getItem("currentUser")
        return JSON.parse(data);
      }
}
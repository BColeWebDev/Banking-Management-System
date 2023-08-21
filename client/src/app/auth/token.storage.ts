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
    getToken(): string | null {
        return localStorage.getItem("userToken");
      }
}
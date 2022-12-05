import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const NAMEUSER_KEY = 'AuthNameUser';
const AUTHORITIES_KEY = 'AuthAutorities';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];
  
  constructor(){}

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }
  public setNameUser(nameUser: string): void {
    window.sessionStorage.removeItem(NAMEUSER_KEY);
    window.sessionStorage.setItem(NAMEUSER_KEY, nameUser)
  }
  public getNameUser(): string {
    return sessionStorage.getItem(NAMEUSER_KEY)!;
  }
  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities))
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach((authority: any) => {
        this.roles.push(authority.authorities)
        
      });

    }
    return this.roles;
    
  }
 
  public logOut(): void {
    window.sessionStorage.clear();
  }
}

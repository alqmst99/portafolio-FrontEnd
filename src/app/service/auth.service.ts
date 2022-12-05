import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto.model';
import { LoginUser } from '../model/login-user.model';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://backendportafolio-alqmst99.koyeb.app/auth'

  constructor(private httpClient: HttpClient) { }
  public create(newUser:Usuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/create', newUser);
  }
  public login(loginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUser);
  }
}

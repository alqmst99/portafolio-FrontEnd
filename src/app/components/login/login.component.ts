import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user.model';
import { Person } from 'src/app/model/person.model';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
isLogged = false;
isLogginFail = false;
loginUser : LoginUser;
nameUser : string;
password: string;
roles: string[] = [];
errMsj: string;


constructor(private tokenService: TokenService, private authService: AuthService, private router:Router) { }

ngOnInit(): void {
  if(this.tokenService.getToken()){
  this.isLogged = true;
  this.isLogginFail = false;
  this.roles = this.tokenService.getAuthorities();
    }
  }
onLogin(): void {
  this.loginUser = new LoginUser(this.nameUser, this.password);
  this.authService.login(this.loginUser).subscribe(data => {
    this.isLogged = true;
    this.isLogginFail = false;
    this.tokenService.setToken(data.token);
    this.tokenService.setAuthorities(data.authorities);
    this.roles = data.authorities;
    this.router.navigate(['/home']);
    alert('¡BIENVENIDO!  ' + this.loginUser.nameUser);
  }, err  => {
    this.isLogged = false;
    this.isLogginFail = true;
    this.errMsj = err.error.menseje;
    console.log(this.errMsj);
    this.router.navigate(['']);
    alert("el usurio no fue logeado intente nuevamente");
      })
    
    }
    
  
  }



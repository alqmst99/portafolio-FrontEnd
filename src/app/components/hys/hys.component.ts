import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/model/hys.model';
import { LoginUser } from 'src/app/model/login-user.model';
import { HysService } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HYSComponent implements OnInit {

  skill : Hys[]= [];
 
  constructor(private Login : TokenService , private hysService : HysService, private tokenService: TokenService) { }
  isAdmin:any;
  isLogged =false;
  ngOnInit(): void {
    this.getRol();
    this.chargeSkill();
     if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
      }
    }
chargeSkill():void{
  this.hysService.list().subscribe(data => { this.skill = data;})
  }
 delete(id? : number ){
  if(id != undefined){
  this.hysService.delete(id).subscribe(
    data => {
      this.chargeSkill();
  }, err =>{
    alert("no se puede eliminar intente nuevamente o verifique sus permisos");
  }
  )}
 }
 getRol(){
  const rol: string [] =this.Login.getAuthorities();
  console.log('Autho',rol);
return (this.isAdmin=rol); }
}

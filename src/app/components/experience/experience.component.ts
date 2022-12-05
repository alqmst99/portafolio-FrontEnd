import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

exp : Experience[]= [];

  constructor(private expService : ExperienceService, private tokenService: TokenService) { }
  
  isLogged =false;
  isAdmin:any;
  ngOnInit(): void {
    this.getRol();
    this.chargeExp();
    if(this.tokenService.getToken()){
      this.isLogged=true;
     
    } else{
      this.isLogged=false;
      }
     
      
    }
chargeExp():void{
  this.expService.list().subscribe(data => { this.exp =data;})
  }
 delete(id? : number ){
  if(id != undefined){
  this.expService.delete(id).subscribe(
    data => {
      this.chargeExp();
      alert('la experiencia a sido eliminada');
  }, err =>{
    alert("no se puede borrar intente nuevamente o revise sus permisos");
  }
  )}
 }
 getRol(){
  const rol: string [] =this.tokenService.getAuthorities();
  console.log('Autho',rol);
return (this.isAdmin=rol); }
}

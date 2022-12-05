import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects.model';
import { ProjectsService } from 'src/app/service/projects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proj :Projects[]= [];

  constructor(private projServ : ProjectsService, private tokenService: TokenService) { }
  isAdmin:any;
  isLogged =false;
  ngOnInit(): void {
    this.getRol();
    this.chargeProj();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
      }
    }
chargeProj():void{
  this.projServ.list().subscribe(data => { this.proj = data;})
  }
 delete(id? : number ){
  if(id != undefined){
  this.projServ.delete(id).subscribe(
    data => {
      this.chargeProj();
  }, err =>{
    alert("can't delete project");
  }
  )}
 }
 getRol(){
  const rol: string [] =this.tokenService.getAuthorities();
  console.log('Autho',rol);
return (this.isAdmin=rol); }
}

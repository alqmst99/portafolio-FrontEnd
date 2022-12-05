import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { percentage } from '@angular/fire/storage';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  person: Person =  null;
  constructor(public personService: PersonService, private tokenService: TokenService) { }
  isLogged = false;
  isAdmin:any;
  ngOnInit(): void {
    this.getRol();
    this.chargePerson();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  chargePerson() {
    this.personService.detail(1).subscribe(data => { this.person = data });
  }
  getRol(){
    const rol: string [] =this.tokenService.getAuthorities();
    console.log('Autho',rol);
  return (this.isAdmin=rol); }
}



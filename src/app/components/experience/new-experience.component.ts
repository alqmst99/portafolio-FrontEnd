import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  nameE: string='';
  dateI: string='';
  dateF: string='';
  descE:string='';

  constructor(private expService: ExperienceService, private router:Router) { }

  ngOnInit(): void {
  }
onCreate():void{
  const exp= new Experience(this.nameE, this.dateI, this.dateF, this.descE);
  this.expService.save(exp).subscribe(data =>{alert("la experiencia " + this.nameE + "se a guadado Exitósamente");
this.router.navigate(['/home']);
}, err =>{
  alert("error al crear la Experiencia, intente nuevamente");
  this.router.navigate(['/home']);
} )
}
}

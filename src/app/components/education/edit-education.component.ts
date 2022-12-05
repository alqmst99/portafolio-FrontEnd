import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  edu : Education;
  constructor(private eduService: EducationService, private activatedRouter: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduService.detail(id).subscribe(data => { 
      this.edu = data;
    }, err =>{
      alert("erroron update");
      this.router.navigate(['/home']);
    } )
  }
onEdit():void{
  const id = this.activatedRouter.snapshot.params['id'];
this.eduService.update(id, this.edu).subscribe(data => {
  alert("actualizacion exitosa");
  this.router.navigate(['/home']);
}, err => {
  alert("error al actualiar intente nuevamente");
  this.router.navigate(['/home']);
})
}
}

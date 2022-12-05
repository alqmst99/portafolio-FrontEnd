import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects.model';
import { ImageService } from 'src/app/service/image.service';
import { ProjectsService } from 'src/app/service/projects.service';


@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {
  
  project: Projects;

  constructor(private projServ: ProjectsService, public imageServ :  ImageService, private activatedRouter:ActivatedRoute, private router: Router) { }
 

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projServ.detail(id).subscribe(data => { 
      this.project = data;
    }, err =>{
      alert("error al actualizar intente nuevamente");
      this.router.navigate(['/home']);
    } )
  }

  onEdit(): void{
    
    const id = this.activatedRouter.snapshot.params['id'];
    this.project.imgP = this.imageServ.url;
    this.projServ.update(id, this.project).subscribe( data => {
    alert("se a actualizado correctamente ");
    this.router.navigate(['/home']);
  }, err => {
    alert("error al actualizar intente nuevamente!");
    this.router.navigate(['/home']);
  })
  }

  uploadImg($event: any) {
    const id =this.activatedRouter.snapshot.params['id'];
    const name = "projecto_" + id ;
    this.imageServ.uploadImgP($event, name);
  }
}

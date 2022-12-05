import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects.model';
import { ImageService } from 'src/app/service/image.service';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectsComponent implements OnInit {
  proj: Projects;
  name: string='';
  descP: string='';
  imgP:string='';

  constructor(private projServ: ProjectsService, public imageServ :  ImageService,private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id =this.activatedRouter.snapshot.params['id'];
  }
   
  
  onCreate(): void {

    const proj = new Projects(this.name, this.descP, this.imgP = this.imageServ.url);
      this.projServ.save(proj).subscribe(data => {
      alert("the project is save");
      this.router.navigate(['/home']);
    }, err => {
      alert("save fail");
      this.router.navigate(['/home']);
    }
     
      )}
  uploadImg($event: any) {
    const id =this.activatedRouter.snapshot.params['id'];
    const name = "projecto_" + id;
    this.imageServ.uploadImg($event, name);
  }
}

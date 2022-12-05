import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys.model';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {

  name: string;
  porcent: number;


  constructor(private hysService: HysService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const skill = new Hys(this.name, this.porcent);
    this.hysService.save(skill).subscribe(data => {
      alert("la habilidad  " + this.name + "se a creado exitosamente");
      this.router.navigate(['/home']);
    }, err => {
      alert("error al crear, intente nuevamente");
      this.router.navigate(['/home']);
    })
    
  }

}

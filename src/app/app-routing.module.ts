import {  NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { EditHysComponent } from './components/hys/edit-hys.component';
import { NewHysComponent } from './components/hys/new-hys.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectsComponent } from './components/proyects/edit-projects.component';
import { NewProjectsComponent } from './components/proyects/new-projects.component';
import { RegisterComponent } from './components/register/register.component';


const routes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'newExperience', component:NewExperienceComponent},
  {path:'editExperience/:id', component:EditExperienceComponent},
  {path:'newEducation', component:NewEducationComponent},
  {path:'editEducation/:id', component:EditEducationComponent},
  {path:'newSkill', component:NewHysComponent},
  {path:'editSkill/:id', component:EditHysComponent},
  {path:'editAbout/:id', component:EditAboutComponent},
  {path:'reg', component:RegisterComponent},
  {path:'EProj/:id', component:EditProjectsComponent},
  {path:'newProj', component:NewProjectsComponent},
];

@NgModule({
   
   imports: [RouterModule.forRoot(routes) ],
    exports:[RouterModule]
  
})
export class AppRoutingModule { }

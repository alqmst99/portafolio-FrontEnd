import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HYSComponent } from './components/hys/hys.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewHysComponent } from './components/hys/new-hys.component';
import { EditHysComponent } from './components/hys/edit-hys.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { NewProjectsComponent } from './components/proyects/new-projects.component';
import { EditProjectsComponent } from './components/proyects/edit-projects.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { interceptorProvider } from './service/interceptor-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HYSComponent,
    ProyectsComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewHysComponent,
    EditHysComponent,
    EditAboutComponent,
    NewProjectsComponent,
    RegisterComponent,
EditProjectsComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    FontAwesomeModule
  ],
  providers: [
   interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

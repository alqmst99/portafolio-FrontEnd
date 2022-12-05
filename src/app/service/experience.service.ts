import { Injectable } from '@angular/core';
import { Experience } from '../model/experience.model';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  expURL= 'https://backendportafolio-alqmst99.koyeb.app/experience/'

 
 constructor(private httpClient:HttpClient) { }
  public list(): Observable <Experience[]>{
    return this.httpClient.get<Experience[]>(this.expURL + 'list')

  }
  public detail(id : number):Observable<Experience>{
    return this.httpClient.get<Experience>(this.expURL + `detail/${id}`);
  }
  public save(exp : Experience): Observable<any>{
return this.httpClient.post<any>(this.expURL + 'create', exp);
  }
  public update(id : number, exp : Experience): Observable<any>{ 
    return this.httpClient.put<any>(this.expURL + `update/${id}`, exp);
  }
  public delete (id : number):Observable<any>{
    return this.httpClient.delete<any>(this.expURL+`delete/${id}`);
  }
 
}

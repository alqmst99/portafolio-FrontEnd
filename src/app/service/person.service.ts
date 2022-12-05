import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
perURL = 'https://backendportafolio-alqmst99.koyeb.app/person/'
  
  constructor(private httpClient : HttpClient) {}
  
  public list(): Observable <Person>{
    return this.httpClient.get<Person>(this.perURL + 'list')

  }
  public detail(id:number):Observable<Person>{
    return this.httpClient.get<Person>(this.perURL + `detail/${id}`);
  }
 /* public save(edu:Person): Observable<any>{
return this.httpClient.post<any>(this.URL + 'create', edu);
  }*/
  public update(id:number, per :Person):Observable<any>{ 
    return this.httpClient.put<any>(this.perURL + `update/${id}`, per);
  }
  /*public delete (id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL+`delete/${id}`);
  }*/
}

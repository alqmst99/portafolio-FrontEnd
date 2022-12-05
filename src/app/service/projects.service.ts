import { Injectable } from '@angular/core';
import { Projects } from '../model/projects.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
projURL='https://backendportafolio-alqmst99.koyeb.app/project'

constructor(private httpClient: HttpClient) { }
public list(): Observable<Projects[]> {
  return this.httpClient.get<Projects[]>(this.projURL + '/list')

}
public detail(id: number): Observable<Projects> {
  return this.httpClient.get<Projects>(this.projURL + `/detail/${id}`);
}
public save(proj: Projects): Observable<any> {
  return this.httpClient.post<any>(this.projURL + '/create', proj);
}
public update(id: number, proj: Projects): Observable<any> {
  return this.httpClient.put<any>(this.projURL + `/update/${id}`, proj);
}
public delete(id: number): Observable<any> {
  return this.httpClient.delete<any>(this.projURL + `/delete/${id}`);
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hys } from '../model/hys.model';

@Injectable({
  providedIn: 'root'
})
export class HysService {
  skillURL = 'https://backendportafolio-alqmst99.koyeb.app/skill/';

  constructor(private httpClient: HttpClient) { }
  public list(): Observable<Hys[]> {
    return this.httpClient.get<Hys[]>(this.skillURL + 'list')

  }
  public detail(id: number): Observable<Hys> {
    return this.httpClient.get<Hys>(this.skillURL + `detail/${id}`);
  }
  public save(skill: Hys): Observable<any> {
    return this.httpClient.post<any>(this.skillURL + 'create', skill);
  }
  public update(id: number, skill: Hys): Observable<any> {
    return this.httpClient.put<any>(this.skillURL + `update/${id}`, skill);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillURL + `delete/${id}`);
  }
}

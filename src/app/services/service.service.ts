import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly _http = inject(HttpClient);

  constructor() { }

  getExperiences(): Observable<any> {
    return this._http.get('/json/experience.json');
  }

  getProjects(): Observable<any> {
    return this._http.get('/json/projects.json');
  }
}

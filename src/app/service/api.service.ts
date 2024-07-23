import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlAPI = 'https://localhost:7099/api/';
  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<any> {
    return this.http.get<any>(this.urlAPI);
  }
  public ObtenerUrl(): string{
    return this.urlAPI
  }
}

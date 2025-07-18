import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  public url = 'http://localhost:3000/restaurants';
  public rootUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getlist(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  saveResto(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  deleteResto(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentResto(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  updateResto(id: number, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(this.rootUrl, data);
  }
}

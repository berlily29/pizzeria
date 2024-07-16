import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { employee } from './pages/home/models/type/emptype';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient, private router: Router) { }

  getAllEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>('http://localhost:8000/employees');
  }

  deleteEmployee(id: number): Observable<employee[]> {

 
    return this.http.delete<employee[]>(`http://localhost:8000/employees/${id}`)
  }

  createEmployee(employee: employee[]): Observable<employee[]> {
    return this.http.post<employee[]>(`http://localhost:8000/employees`, employee);
  }

  updateEmployee(employee: employee[], id: number): Observable<employee[]> {
    return this.http.put<employee[]>(`http://localhost:8000/employees/${id}`, employee);
  }

  updateVisibility(visibility: string, id: number): Observable<any> {
    console.log(visibility)
    return this.http.put<any>(`http://localhost:8000/employees/show/${id}`, visibility);
  }

  
}

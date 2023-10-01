import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService
{

  constructor(private http:HttpClient) { }

  getAllStudents():Observable<any>
  {
    return this.http.get('http://localhost:3000/studentsdegrees');
  }
  getStudentBySeatingNo(studentseatingNo:number):Observable<any>
  {
    return this.http.get(`http://localhost:3000/studentsdegrees/${studentseatingNo}`);
  }
}

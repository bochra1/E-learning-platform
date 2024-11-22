import { Injectable } from "@angular/core";
import { Student } from "../model/Student";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Form } from "@angular/forms";


@Injectable({providedIn: 'root'})
export class StudentService {

  private baseUrl = 'http://localhost:8081/student';
  constructor(private httpClient: HttpClient) { }


 getStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>("http://localhost:8081/student/getStudent");
  }
  deleteStudent(id: number): Observable<void> {
    return this.httpClient.delete<void>("http://localhost:8081/student/deleteStudent/"+id );
  }


}


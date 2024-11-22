import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Form } from "@angular/forms";
import { Formation } from "../Model/Formation";
import { HttpClient } from "@angular/common/http";
import { Course } from "src/app/Course";
@Injectable({providedIn: 'root'})
export class trainingService {
  constructor(private httpClient: HttpClient) { }
  getFormation(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>("http://localhost:8081/training/getTraining");
  }
  addCourse(course : Course , id:number): Observable<Object> {
    return this.httpClient.post("http://localhost:8081/course/",id);
  }



}

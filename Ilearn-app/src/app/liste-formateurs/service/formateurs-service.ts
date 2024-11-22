import { Injectable } from "@angular/core";
import { Formateur } from "../model/Formateur";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Form } from "@angular/forms";
@Injectable({providedIn: 'root'})
export class FormateurService {

  headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient: HttpClient) { }

 getFormateur(): Observable<Formateur[]> {
    return this.httpClient.get<Formateur[]>("http://localhost:8081/teacher");
  }
  deleteFormateur(id: number): Observable<void> {
    return this.httpClient.delete<void>("http://localhost:8081/teacher/"+id);
  }
  updateFormateur(data : any):Observable<any>{
    let url='http://localhost:8081/teacher';
    return this.httpClient.put(url ,data, {headers:this.headers})}
    
}


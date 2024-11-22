import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Form } from "@angular/forms";
import { Formation } from "../model/Formation";

@Injectable({providedIn: 'root'})
export class FormationService {


  constructor(private httpClient: HttpClient) { }


 getFormation(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>("http://localhost:8081/training/getTraining");
  }
  deleteFormation(id: number): Observable<void> {
    return this.httpClient.delete<void>("http://localhost:8081/training/deleteTraining/"+id );
  }


}

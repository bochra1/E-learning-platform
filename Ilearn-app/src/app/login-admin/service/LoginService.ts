import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Form } from "@angular/forms";

import { Login } from "src/app/Login";


@Injectable({providedIn: 'root'})
export class LoginService {


  constructor(private httpClient: HttpClient) { }


 login(user:any){
    return this.httpClient.post("http://localhost:8081/api/login",user,{responseType:'text'});
  }


}

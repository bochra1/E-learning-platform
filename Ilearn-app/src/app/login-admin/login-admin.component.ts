import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ListeFormationsComponent } from '../liste-formations/liste-formations.component';
import { Login } from '../Login';

import { LoginService } from './service/LoginService';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  login !:FormGroup
  user:any = {}
  result : String ="" ;
  constructor(private loginService : LoginService,private fb:FormBuilder,private router : Router) { }

  ngOnInit(): void {
    this.login=this.fb.group({
      email:[''],
      password:['']
    })

  }

  verif(){ }
addLogin(){

  this.loginService.login(this.user).subscribe(data=>{
    this.result = data
    if( this.result == "admin"){
      this.router.navigate(["/dash-admin"])
    }
    else if(this.result == "student"){
      this.router.navigate(["/dash-appr"])
    }
    else(alert("no found 404"))
  });

  console.log(this.user);

}


  }



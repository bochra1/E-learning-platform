import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarloginComponent } from './navbarlogin/navbarlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const newLocal = './dashbord-admin/dashbord-admin.module';
const adminRoutes: Routes = [
  {
    path: '',
    component: LoginAdminComponent,
     children: [ {path: 'login', component: LoginAdminComponent},{path:'navbaradmin', component:NavbarloginComponent}]},
      { path: 'dash-admin' , loadChildren:()=>import('../dashbord-admin/dashbord-admin.module').then(m=>m.DashbordAdminModule)},
    {path:'dash-appr', loadChildren:()=>import('../dashbord-apprenant/dashbord-apprenant.module').then(m=>m.DashbordApprenantModule)},
    {path:'nos-formations' , loadChildren:()=>import('../nos-formations/nos-formations.module').then(m=>m.NosFormationsModule), },
    {path:'dash-appr' , loadChildren:()=>import('../dashbord-apprenant/dashbord-apprenant.module').then(m=>m.DashbordApprenantModule)}]
@NgModule({
  declarations: [LoginAdminComponent, NavbarloginComponent],
  imports: [RouterModule.forChild(adminRoutes),
    FormsModule,ReactiveFormsModule,HttpClientModule,
    CommonModule],
   bootstrap: [LoginAdminComponent ]

})
export class LoginAdminModule { }

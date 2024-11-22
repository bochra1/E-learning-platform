import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
const inscriptionRoutes: Routes = [
  {path: '',
   component: InscriptionComponent},{
    children: [ {path: 'inscription', component: InscriptionComponent}]},
    {path:"navbar", component: NavbarComponent
  },{path:'dash-appr', loadChildren:()=>import('../dashbord-apprenant/dashbord-apprenant.module').then(m=>m.DashbordApprenantModule)},
{path:'/login',loadChildren:()=>import('../login-admin/login-admin.module').then(m=>m.LoginAdminModule)}]

@NgModule({
  declarations: [
    InscriptionComponent, NavbarComponent
  ],
  imports: [RouterModule.forChild(inscriptionRoutes),
CommonModule , FormsModule ],
bootstrap: [InscriptionComponent]

})
export class InscriptionModule {}

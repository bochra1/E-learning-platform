import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { HttpClientModule } from '@angular/common/http';
import { NosFormationsComponent } from './nos-formations/nos-formations.component';

const appRoutes: Routes = [
  {path: '' , redirectTo: 'welcome', pathMatch: 'full'},

  { path: 'welcome' , component: WelcomeComponent},
  { path: 'navbar' , component: NavbarComponent},
  {path: 'inscription',
  loadChildren:()=>import('./inscription/inscription.module').then(m=>m.InscriptionModule)},
  {path: 'login', loadChildren:()=>import('./login-admin/login-admin.module').then(m=>m.LoginAdminModule)
  },   {path: 'dash-admin',
  loadChildren:()=>import('./dashbord-admin/dashbord-admin.module').then(m=>m.DashbordAdminModule)},
  { path:'liste' ,  loadChildren:()=>import('./liste-formateurs/liste-formateurs.module').then(m=>m.ListeFormateursModule)
},{path:'listeformations', loadChildren:()=>import('./liste-formations/liste-formations.module').then(m=>m.ListeFormationsModule)},
{path:'listeapprenants', loadChildren:()=>import('./liste-apprenants/liste-apprenants.module').then(m=>m.ListeApprenantsModule)} ,
{path:'nos-formations' , loadChildren:()=>import('./nos-formations/nos-formations.module').then(m=>m.NosFormationsModule) },
{path:'dash-appr', loadChildren:()=>import('./dashbord-apprenant/dashbord-apprenant.module').then(m=>m.DashbordApprenantModule)} ,
{path: 'mescours' ,loadChildren:()=>import('./mescours/mescours.module').then(m=>m.MescoursModule) }]


  @NgModule({
  declarations: [
    AppComponent ,
    WelcomeComponent,
    NavbarComponent,
    NosFormationsComponent,
    
  ],
   
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
    ), HttpClientModule,
      BrowserModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function newLocal(newLocal: any) {
  throw new Error('Function not implemented.');
}


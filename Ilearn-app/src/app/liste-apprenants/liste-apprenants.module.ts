import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeApprenantsComponent } from './liste-apprenants.component';
import { NavapprenantsComponent } from './navapprenants/navapprenants.component';
import { SideapprenantsComponent } from './sideapprenants/sideapprenants.component';
import { RouterModule, Routes } from '@angular/router';
import { ListeFormateursComponent } from '../liste-formateurs/liste-formateurs.component';
import { ListeFormationsComponent } from '../liste-formations/liste-formations.component';

const ApprenantsRoutes: Routes = [{path: '' , redirectTo: 'liste-apprenants', pathMatch: 'full'},
  {path:'home',loadChildren:()=>import('../dashbord-admin/dashbord-admin.module').then(m=>m.DashbordAdminModule) },
    {path: '/liste-formateurs',
    component: ListeFormateursComponent},{path:'/listeformations', component:ListeFormationsComponent},
    {path:'liste-apprenants', component: ListeApprenantsComponent},
    {  children: [{path:'navapprenant', component: NavapprenantsComponent},{path:'sideapprenant', component:SideapprenantsComponent}]}]


@NgModule({
  declarations: [
    ListeApprenantsComponent, NavapprenantsComponent, SideapprenantsComponent
  ],
  imports: [RouterModule.forChild(ApprenantsRoutes),
    CommonModule
  ],bootstrap: [ListeApprenantsComponent]
})
export class ListeApprenantsModule { }

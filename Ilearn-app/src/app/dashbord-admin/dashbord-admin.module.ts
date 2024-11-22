import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordAdminComponent } from './dashbord-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { ListeFormateursComponent } from '../liste-formateurs/liste-formateurs.component';
import { ListeFormationsComponent } from '../liste-formations/liste-formations.component';
import { ListeApprenantsComponent } from '../liste-apprenants/liste-apprenants.component';

const dashRoutes: Routes = [{path: '' , redirectTo: 'dash-admin', pathMatch: 'full'},
{path: 'dash-admin',
component: DashbordAdminComponent},
    { children: [ {path: "sidebar", component: SidebarComponent},{path:"nav" , component: NavComponent}]}, 
    {path :'/liste', component:ListeFormateursComponent},
    {path:'/listeformations' , component:ListeFormationsComponent},
    {path:'/listeapprenants', component:ListeApprenantsComponent}
]
@NgModule({
  declarations: [
    DashbordAdminComponent, SidebarComponent,NavComponent
  ],
  imports: [RouterModule.forChild(dashRoutes),
    CommonModule]  , bootstrap: [DashbordAdminComponent]

})
export class DashbordAdminModule { }

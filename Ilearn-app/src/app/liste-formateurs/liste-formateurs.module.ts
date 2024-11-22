import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeFormateursComponent } from './liste-formateurs.component';
import { RouterModule, Routes } from '@angular/router';
import { NavListeComponent } from './nav-liste/nav-liste.component';
import { SidebarlisteComponent } from './sidebarliste/sidebarliste.component';
import { ListeFormationsComponent } from '../liste-formations/liste-formations.component';
import { ListeApprenantsComponent } from '../liste-apprenants/liste-apprenants.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const formateursRoutes: Routes = [{path: '' , redirectTo: 'liste-formateurs', pathMatch: 'full'},
  {path:'/home',loadChildren:()=>import('../dashbord-admin/dashbord-admin.module').then(m=>m.DashbordAdminModule) },
    {path: 'liste-formateurs',
    component: ListeFormateursComponent},{path:'/listeformations', component:ListeFormationsComponent},
    {path:'/listeapprenants', component:ListeApprenantsComponent},
    {  children: [{path:'navliste', component: NavListeComponent},{path:'sideliste', component:SidebarlisteComponent}]}
]
@NgModule({
  declarations: [
    ListeFormateursComponent, NavListeComponent, SidebarlisteComponent
  ],
  imports: [RouterModule.forChild(formateursRoutes),
    CommonModule,FormsModule,HttpClientModule
  ], bootstrap: [ListeFormateursComponent]
})
export class ListeFormateursModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeFormationsComponent } from './liste-formations.component';
import { RouterModule, Routes } from '@angular/router';
import { NavFormationsComponent } from './nav-formations/nav-formations.component';
import { SideFormationsComponent } from './side-formations/side-formations.component';
import { ListeFormateursComponent } from '../liste-formateurs/liste-formateurs.component';

const formationsRoutes: Routes = [{path: '' , redirectTo: 'liste-formations', pathMatch: 'full'},
{path:'home',loadChildren:()=>import('../dashbord-admin/dashbord-admin.module').then(m=>m.DashbordAdminModule) },
  {path: '/liste-formateurs',
  component: ListeFormateursComponent},
  {path:'liste-formations', component:ListeFormationsComponent},
  {  children: [{path:'navformations', component: NavFormationsComponent},{path:'sideformations', component:SideFormationsComponent}]}
]

@NgModule({
  declarations: [

    ListeFormationsComponent, NavFormationsComponent,SideFormationsComponent
  ],
  imports: [RouterModule.forChild(formationsRoutes),     CommonModule]  , bootstrap: [ListeFormationsComponent]
})
export class ListeFormationsModule { }

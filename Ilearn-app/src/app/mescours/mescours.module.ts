import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MescoursComponent } from './mescours.component';
import { RouterModule, Routes } from '@angular/router';
const CoursRoutes: Routes = [{path: '' , redirectTo: 'mescours', pathMatch: 'full'},
{path: 'mescours',
component: MescoursComponent}]


@NgModule({
  declarations: [
    MescoursComponent
  ],
  imports: [RouterModule.forChild(CoursRoutes),
    CommonModule],    
   bootstrap: [MescoursComponent ]
})
export class MescoursModule { }

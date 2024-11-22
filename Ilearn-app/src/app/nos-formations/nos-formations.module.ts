import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NosFormationsComponent } from './nos-formations.component';
import { NavvComponent } from './navv/navv.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const nosformationsRoutes: Routes = [{path: '' , redirectTo: 'nos-formations', pathMatch: 'full'},
{path:'nos-formations', component: NosFormationsComponent},
    { children: [ {path: "navvappr", component: NavvComponent}
  ]}]
@NgModule({
  declarations: [NavvComponent
  ],
  imports: [RouterModule.forChild(nosformationsRoutes),
    CommonModule,HttpClientModule,FormsModule
  ],
   bootstrap: [NosFormationsComponent]
})
export class NosFormationsModule { }

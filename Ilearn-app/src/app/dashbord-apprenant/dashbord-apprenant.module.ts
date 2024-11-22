import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordApprenantComponent } from './dashbord-apprenant.component';
import { NavbarAppComponent } from './navbar-app/navbar-app.component';
import { SideApprComponent } from './side-appr/side-appr.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FeaturettesComponent } from './featurettes/featurettes.component';
import { FooterComponent } from './footer/footer.component';
import { NosFormationsComponent } from '../nos-formations/nos-formations.component';
const ApprRoutes: Routes = [{path: '' , redirectTo: 'dash-appr', pathMatch: 'full'},
{path: 'dash-appr',
component: DashbordApprenantComponent},
    { children: [ {path: "side-appr", component: SideApprComponent},{path:"nav" , component:NavbarAppComponent },
    {path:"carousel" , component:CarouselComponent},{path:"featurettes" , component:FeaturettesComponent},
    {path:"footer" , component:FooterComponent},{path:"marketing" , component:MarketingComponent}]},
    {path:'nos-formations' , loadChildren:()=>import('../nos-formations/nos-formations.module').then(m=>m.NosFormationsModule) } ,
  {path: 'mescours' ,loadChildren:()=>import('../mescours/mescours.module').then(m=>m.MescoursModule) }]

 
@NgModule({
  declarations: [
    DashbordApprenantComponent , NavbarAppComponent,SideApprComponent, CarouselComponent,
    MarketingComponent,
    FeaturettesComponent,
    FooterComponent
  ],
  imports: [RouterModule.forChild(ApprRoutes),
    CommonModule
  ]
})
export class DashbordApprenantModule { }

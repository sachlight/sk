import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceDetailsComponent } from './services/service-details/service-details.component';
// import { SharedModule } from './shared.module';

const routes: Routes = [
  // {path:'', component:},
  
  // {path:'work', component:WorkComponent},
  // {path:'', component:ServicesComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'services/:id/:service_name',component:ServiceDetailsComponent}
  // {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

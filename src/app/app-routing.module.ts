import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { TestyComponent } from './testy/testy.component';



const routes: Routes = [
 

  // {
  //   path: 'work',
  //   loadChildren: () => import('./work/work.module').then(m => m.WorkModule)
  // },
  // {
  //   path: 'shared',
  //   loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  // },
  // {
  //   path: 'developments',
  //   loadChildren: () => import('./developments/developments.module').then(m => m.DevelopmentsModule)
  // },
  // {
  //   path: 'general',
  //   loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
  // },
  {path:'', redirectTo:'', pathMatch:'full'},
  // {path:'working', loadChildren:()=>import('./work/work.module').then(s=>s.WorkModule)}

  // {path:'**', component:PagenotfoundComponent}
  
  
  // {path:'testy?', component:TestyComponent }
  // {path:'testy', component:TestyComponent}
  
  // {path:'**', component: PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

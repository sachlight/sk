import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDetailsComponent } from '../work/test-details/test-details.component';
import { GurukulComponent } from './gurukul/gurukul.component';

const routes: Routes = [
  {path:'', component:GurukulComponent},
  {path:'guru/:id', component:TestDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
// import { BattleComponent } from './battle/battle.component';
// import { BeFirstComponent } from './be-first/be-first.component';
// import { BlenddComponent } from './blendd/blendd.component';
// import { BoxesComponent } from './boxes/boxes.component';
// import { BugwarzComponent } from './bugwarz/bugwarz.component';
// import { DewComponent } from './dew/dew.component';
// import { FidgetComponent } from './fidget/fidget.component';
// import { FireSmokeComponent } from './fire-smoke/fire-smoke.component';
// import { GreenComComponent } from './green-com/green-com.component';
// import { IamComponent } from './iam/iam.component';
// import { InteriorDesignComponent } from './interior-design/interior-design.component';
// import { MestoryComponent } from './mestory/mestory.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { ProjectFilterComponent } from './work/project-filter/project-filter.component';
// import { PuzzleComponent } from './puzzle/puzzle.component';
// import { QldSwimacademyComponent } from './qld-swimacademy/qld-swimacademy.component';
// import { RollerCoasterComponent } from './roller-coaster/roller-coaster.component';
// import { SlidingSantaComponent } from './sliding-santa/sliding-santa.component';
// import { SpaceFuzzComponent } from './space-fuzz/space-fuzz.component';
// import { SwypeComponent } from './swype/swype.component';
// import { TestDetailsComponent } from './test-details/test-details.component';
// import { TufaComponent } from './tufa/tufa.component';
import { WorkComponent } from './work/work.component';
// import { WorldWorldComponent } from './world-world/world-world.component';

const routes: Routes = [
  {path:'', redirectTo:'/work', pathMatch:'full'},
  {path:'work', component:WorkComponent},
  {path:'work/:id/:project_name', component:ProjectDetailComponent},
  {path:'Aemj/:id/:service_name', component:ProjectFilterComponent},

  {path:'test', component:TestDetailsComponent}
  // {path:'work/:id',component:TestDetailsComponent},
  // {path:'battle', component:BattleComponent},
  // {path:'be-first', component:BeFirstComponent},
  // {path:'blendd', component:BlenddComponent},
  // {path:'boxes', component:BoxesComponent},
  // {path:'bugwarz', component:BugwarzComponent},
  // {path:'dew', component:DewComponent},
  // {path:'fidget', component:FidgetComponent},
  // {path:'fire-smoke', component:FireSmokeComponent},
  // {path:'green-com', component:GreenComComponent},
  // {path:'i-am', component:IamComponent},
  // {path:'interior', component:InteriorDesignComponent},
  // {path:'mestory', component:MestoryComponent},
  // {path:'puzzle', component:PuzzleComponent},
  // {path:'qld-swim', component:QldSwimacademyComponent},
  // {path:'roller-coaster', component:RollerCoasterComponent},
  // {path:'sliding-santa', component:SlidingSantaComponent},
  // {path:'space-fuzz', component:SpaceFuzzComponent},
  // {path:'swype', component:SwypeComponent},
  // {path:'tufa', component:TufaComponent},
  // {path:'world', component:WorldWorldComponent},
  // {path:'**', component:PagenotfoundComponent}
  // {path:'', component:},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }

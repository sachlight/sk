import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StickyNavModule } from 'ng2-sticky-nav';
import { WorkRoutingModule } from "./work-routing.module";
import { WorkComponent } from "./work/work.component";
// import { BattleComponent } from "./battle/battle.component";
// import { BeFirstComponent } from "./be-first/be-first.component";
// import { BlenddComponent } from "./blendd/blendd.component";
// import { BoxesComponent } from "./boxes/boxes.component";
// import { BugwarzComponent } from "./bugwarz/bugwarz.component";
// import { DewComponent } from "./dew/dew.component";
// import { FidgetComponent } from "./fidget/fidget.component";
// import { FireSmokeComponent } from "./fire-smoke/fire-smoke.component";
// import { GreenComComponent } from "./green-com/green-com.component";
// import { IamComponent } from "./iam/iam.component";
// import { InteriorDesignComponent } from "./interior-design/interior-design.component";
// import { MestoryComponent } from "./mestory/mestory.component";
// import { PuzzleComponent } from "./puzzle/puzzle.component";
// import { QldSwimacademyComponent } from "./qld-swimacademy/qld-swimacademy.component";
// import { RollerCoasterComponent } from "./roller-coaster/roller-coaster.component";
// import { SlidingSantaComponent } from "./sliding-santa/sliding-santa.component";
// import { SpaceFuzzComponent } from "./space-fuzz/space-fuzz.component";
// import { SwypeComponent } from "./swype/swype.component";
// import { TufaComponent } from "./tufa/tufa.component";
// import { WorldWorldComponent } from "./world-world/world-world.component";
import { SwiperModule } from "swiper/angular";
import { TestDetailsComponent } from './test-details/test-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectFilterComponent } from './work/project-filter/project-filter.component';
// import { GeneralModule } from "../general/general.module";
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    WorkComponent,
    // BattleComponent,
    // BeFirstComponent,
    // BlenddComponent,
    // BoxesComponent,
    // BugwarzComponent,
    // DewComponent,
    // FidgetComponent,
    // FireSmokeComponent,
    // GreenComComponent,
    // IamComponent,
    // InteriorDesignComponent,
    // MestoryComponent,
    // PuzzleComponent,
    // QldSwimacademyComponent,
    // RollerCoasterComponent,
    // SlidingSantaComponent,
    // SpaceFuzzComponent,
    // SwypeComponent,
    // TufaComponent,
    // WorldWorldComponent,
    TestDetailsComponent,
    ProjectDetailComponent,
    ProjectFilterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule,NgxSpinnerModule, WorkRoutingModule,StickyNavModule,SwiperModule,SharedModule],
  exports: [WorkComponent],
})
export class WorkModule {}

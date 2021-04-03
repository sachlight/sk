import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SliderComponent } from "./slider/slider.component";
import { MemorableComponent } from "./memorable/memorable.component";
import { FeedbackComponent } from "./feedback/feedback.component";
// import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { CaseStudyComponent } from "./case-study/case-study.component";
import { LetsWorkComponent } from "./lets-work/lets-work.component";
import { SwiperModule } from "swiper/angular";
import { AngularFullpageModule } from "@fullpage/angular-fullpage";
import { NgwWowModule } from "ngx-wow";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DevelopmentsModule } from "../developments/developments.module";
import { AngularTiltModule } from "angular-tilt";
// import { LoaderComponent } from "../loader/loader.component";
// import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { ServiceDetailsComponent } from './services/service-details/service-details.component';
import { GeneralModule } from "../general/general.module";
// import { OurGamesComponent } from "../developments/our-games/our-games.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { Title } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AboutComponent,

    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    
    MemorableComponent,
    FeedbackComponent,
    HomeComponent,
    ServicesComponent,
    CaseStudyComponent,
    LetsWorkComponent,
    ServiceDetailsComponent,
    // OurGamesComponent
    // LoaderComponent
  ],
  imports: [
    
    CommonModule,
    SharedRoutingModule,
    SwiperModule,
    AngularFullpageModule,
    NgwWowModule,
    BrowserAnimationsModule,
    // DevelopmentsModule,
    AngularTiltModule,
    NgwWowModule,
    HttpClientModule,
    GeneralModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
    // NgxSpinnerModule

   
  ],
  exports: [
    SliderComponent,
    HomeComponent,
    CaseStudyComponent,
    LetsWorkComponent,
    ServicesComponent,
    MemorableComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackComponent,
    
    // LoaderComponent
  ],
  providers:[Title],
})
export class SharedModule {}

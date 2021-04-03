import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
// import { WorkModule } from './work/work.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestyComponent } from './testy/testy.component';
// import { NgwWowModule } from 'ngx-wow';
// import { LetsWorkComponent } from './shared/lets-work/lets-work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedComponent } from './feed/feed.component';
import { SwiperModule } from 'swiper/angular';
// import { DevelopmentsModule } from './developments/developments.module';
// import { FeedbackComponent } from './shared/feedback/feedback.component';
import { LoaderComponent } from './loader/loader.component';
import { GeneralModule } from './general/general.module';
// import { GeneralModule } from './general/general.module';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { WorkModule } from './work/work.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    TestyComponent,
    FeedComponent,
    LoaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    WorkModule,
    SwiperModule,
    BrowserAnimationsModule,

    GeneralModule,
    NgxSpinnerModule
  ],

  providers: [Title],
  exports:[LoaderComponent],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

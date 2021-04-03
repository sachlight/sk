import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { ClientFeedComponent } from './client-feed/client-feed.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [ClientFeedComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SwiperModule
  ],
  exports:[ClientFeedComponent]
})
export class GeneralModule { }

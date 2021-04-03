import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowRoutingModule } from './window-routing.module';
import { GurukulComponent } from './gurukul/gurukul.component';


@NgModule({
  declarations: [GurukulComponent],
  imports: [
    CommonModule,
    WindowRoutingModule
  ]
})
export class WindowModule { }

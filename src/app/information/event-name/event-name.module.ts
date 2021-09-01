import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventNamePageRoutingModule } from './event-name-routing.module';

import { EventNamePage } from './event-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventNamePageRoutingModule
  ],
  declarations: [EventNamePage]
})
export class EventNamePageModule {}

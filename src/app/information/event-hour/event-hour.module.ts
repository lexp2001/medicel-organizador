import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventHourPageRoutingModule } from './event-hour-routing.module';

import { EventHourPage } from './event-hour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventHourPageRoutingModule
  ],
  declarations: [EventHourPage]
})
export class EventHourPageModule {}

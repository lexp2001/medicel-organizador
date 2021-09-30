import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyEventsPageRoutingModule } from './daily-events-routing.module';

import { DailyEventsPage } from './daily-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyEventsPageRoutingModule
  ],
  declarations: [DailyEventsPage]
})
export class DailyEventsPageModule {}

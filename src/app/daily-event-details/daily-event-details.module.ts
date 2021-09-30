import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyEventDetailsPageRoutingModule } from './daily-event-details-routing.module';

import { DailyEventDetailsPage } from './daily-event-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyEventDetailsPageRoutingModule
  ],
  declarations: [DailyEventDetailsPage]
})
export class DailyEventDetailsPageModule {}

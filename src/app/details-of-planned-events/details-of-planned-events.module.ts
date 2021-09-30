import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsOfPlannedEventsPageRoutingModule } from './details-of-planned-events-routing.module';

import { DetailsOfPlannedEventsPage } from './details-of-planned-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsOfPlannedEventsPageRoutingModule
  ],
  declarations: [DetailsOfPlannedEventsPage]
})
export class DetailsOfPlannedEventsPageModule {}

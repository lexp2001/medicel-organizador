import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventCoverPageRoutingModule } from './event-cover-routing.module';

import { EventCoverPage } from './event-cover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventCoverPageRoutingModule
  ],
  declarations: [EventCoverPage]
})
export class EventCoverPageModule {}

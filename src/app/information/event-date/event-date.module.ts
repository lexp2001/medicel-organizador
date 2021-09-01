import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDatePageRoutingModule } from './event-date-routing.module';

import { EventDatePage } from './event-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDatePageRoutingModule
  ],
  declarations: [EventDatePage]
})
export class EventDatePageModule {}

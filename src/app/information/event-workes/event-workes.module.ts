import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventWorkesPageRoutingModule } from './event-workes-routing.module';

import { EventWorkesPage } from './event-workes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventWorkesPageRoutingModule
  ],
  declarations: [EventWorkesPage]
})
export class EventWorkesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventAssistantsPageRoutingModule } from './event-assistants-routing.module';

import { EventAssistantsPage } from './event-assistants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventAssistantsPageRoutingModule
  ],
  declarations: [EventAssistantsPage]
})
export class EventAssistantsPageModule {}

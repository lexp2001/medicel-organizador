import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationEventPageRoutingModule } from './information-event-routing.module';

import { InformationEventPage } from './information-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationEventPageRoutingModule
  ],
  declarations: [InformationEventPage]
})
export class InformationEventPageModule {}

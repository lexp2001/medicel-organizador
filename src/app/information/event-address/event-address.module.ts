import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventAddressPageRoutingModule } from './event-address-routing.module';

import { EventAddressPage } from './event-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventAddressPageRoutingModule
  ],
  declarations: [EventAddressPage]
})
export class EventAddressPageModule {}

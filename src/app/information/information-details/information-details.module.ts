import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationDetailsPageRoutingModule } from './information-details-routing.module';

import { InformationDetailsPage } from './information-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationDetailsPageRoutingModule
  ],
  declarations: [InformationDetailsPage]
})
export class InformationDetailsPageModule {}

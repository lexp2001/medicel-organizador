import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistantsDetailsPageRoutingModule } from './assistants-details-routing.module';

import { AssistantsDetailsPage } from './assistants-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistantsDetailsPageRoutingModule
  ],
  declarations: [AssistantsDetailsPage]
})
export class AssistantsDetailsPageModule {}

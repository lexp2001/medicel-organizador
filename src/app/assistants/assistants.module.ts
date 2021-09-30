import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistantsPageRoutingModule } from './assistants-routing.module';

import { AssistantsPage } from './assistants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistantsPageRoutingModule
  ],
  declarations: [AssistantsPage]
})
export class AssistantsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitationWorkersPageRoutingModule } from './invitation-workers-routing.module';

import { InvitationWorkersPage } from './invitation-workers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitationWorkersPageRoutingModule
  ],
  declarations: [InvitationWorkersPage]
})
export class InvitationWorkersPageModule {}

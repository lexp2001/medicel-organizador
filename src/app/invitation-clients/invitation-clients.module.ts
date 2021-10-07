import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitationClientsPageRoutingModule } from './invitation-clients-routing.module';

import { InvitationClientsPage } from './invitation-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitationClientsPageRoutingModule
  ],
  declarations: [InvitationClientsPage]
})
export class InvitationClientsPageModule {}

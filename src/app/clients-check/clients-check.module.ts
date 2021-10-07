import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsCheckPageRoutingModule } from './clients-check-routing.module';

import { ClientsCheckPage } from './clients-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientsCheckPageRoutingModule
  ],
  declarations: [ClientsCheckPage]
})
export class ClientsCheckPageModule {}

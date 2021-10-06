import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkersCheckPageRoutingModule } from './workers-check-routing.module';

import { WorkersCheckPage } from './workers-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkersCheckPageRoutingModule
  ],
  declarations: [WorkersCheckPage]
})
export class WorkersCheckPageModule {}

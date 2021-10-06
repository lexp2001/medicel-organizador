import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkersCheckPage } from './workers-check.page';

const routes: Routes = [
  {
    path: '',
    component: WorkersCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersCheckPageRoutingModule {}

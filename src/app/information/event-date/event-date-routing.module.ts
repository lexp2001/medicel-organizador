import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDatePage } from './event-date.page';

const routes: Routes = [
  {
    path: '',
    component: EventDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventDatePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventHourPage } from './event-hour.page';

const routes: Routes = [
  {
    path: '',
    component: EventHourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventHourPageRoutingModule {}

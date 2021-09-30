import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyEventsPage } from './daily-events.page';

const routes: Routes = [
  {
    path: '',
    component: DailyEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyEventsPageRoutingModule {}

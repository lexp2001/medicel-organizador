import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyEventDetailsPage } from './daily-event-details.page';

const routes: Routes = [
  {
    path: '',
    component: DailyEventDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyEventDetailsPageRoutingModule {}

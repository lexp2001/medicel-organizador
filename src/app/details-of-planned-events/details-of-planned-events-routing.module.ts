import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsOfPlannedEventsPage } from './details-of-planned-events.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsOfPlannedEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsOfPlannedEventsPageRoutingModule {}

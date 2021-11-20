import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventCoverPage } from './event-cover.page';

const routes: Routes = [
  {
    path: '',
    component: EventCoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventCoverPageRoutingModule {}

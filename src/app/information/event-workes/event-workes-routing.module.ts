import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventWorkesPage } from './event-workes.page';

const routes: Routes = [
  {
    path: '',
    component: EventWorkesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventWorkesPageRoutingModule {}

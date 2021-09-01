import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventNamePage } from './event-name.page';

const routes: Routes = [
  {
    path: '',
    component: EventNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventNamePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationEventPage } from './information-event.page';

const routes: Routes = [
  {
    path: '',
    component: InformationEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationEventPageRoutingModule {}

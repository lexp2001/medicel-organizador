import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventAddressPage } from './event-address.page';

const routes: Routes = [
  {
    path: '',
    component: EventAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventAddressPageRoutingModule {}

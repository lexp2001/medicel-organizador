import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventAssistantsPage } from './event-assistants.page';

const routes: Routes = [
  {
    path: '',
    component: EventAssistantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventAssistantsPageRoutingModule {}

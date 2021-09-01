import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistantsDetailsPage } from './assistants-details.page';

const routes: Routes = [
  {
    path: '',
    component: AssistantsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistantsDetailsPageRoutingModule {}

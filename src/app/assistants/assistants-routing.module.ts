import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistantsPage } from './assistants.page';

const routes: Routes = [
  {
    path: '',
    component: AssistantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistantsPageRoutingModule {}

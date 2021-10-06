import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitationWorkersPage } from './invitation-workers.page';

const routes: Routes = [
  {
    path: '',
    component: InvitationWorkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationWorkersPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitationClientsPage } from './invitation-clients.page';

const routes: Routes = [
  {
    path: '',
    component: InvitationClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationClientsPageRoutingModule {}

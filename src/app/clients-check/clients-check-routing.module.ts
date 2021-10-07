import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsCheckPage } from './clients-check.page';

const routes: Routes = [
  {
    path: '',
    component: ClientsCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsCheckPageRoutingModule {}

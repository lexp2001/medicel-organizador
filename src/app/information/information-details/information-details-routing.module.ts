import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationDetailsPage } from './information-details.page';

const routes: Routes = [
  {
    path: '',
    component: InformationDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationDetailsPageRoutingModule {}

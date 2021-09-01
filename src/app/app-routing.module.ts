import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {

    path: 'email',
    loadChildren: () => import('./form/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./form/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'rut',
    loadChildren: () => import('./form/rut/rut.module').then( m => m.RutPageModule)
  },
  {
    path: 'rubro',
    loadChildren: () => import('./form/rubro/rubro.module').then( m => m.RubroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'event-name',
    loadChildren: () => import('./information/event-name/event-name.module').then( m => m.EventNamePageModule)
  },
  {
    path: 'event-address',
    loadChildren: () => import('./information/event-address/event-address.module').then( m => m.EventAddressPageModule)
  },
  {
    path: 'event-assistants',
    loadChildren: () => import('./information/event-assistants/event-assistants.module').then( m => m.EventAssistantsPageModule)
  },
  {
    path: 'event-workes',
    loadChildren: () => import('./information/event-workes/event-workes.module').then( m => m.EventWorkesPageModule)
  },
  {
    path: 'event-date',
    loadChildren: () => import('./information/event-date/event-date.module').then( m => m.EventDatePageModule)
  },
  {
    path: 'event-hour',
    loadChildren: () => import('./information/event-hour/event-hour.module').then( m => m.EventHourPageModule)
  },
  {
    path: 'assistants-details',
    loadChildren: () => import('./information/assistants-details/assistants-details.module').then( m => m.AssistantsDetailsPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./information/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

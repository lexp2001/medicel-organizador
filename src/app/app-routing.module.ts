import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    path: 'event-cover',
    loadChildren: () => import('./information/event-cover/event-cover.module').then( m => m.EventCoverPageModule)
  },
  {
    path: 'assistants-details',
    loadChildren: () => import('./information/assistants-details/assistants-details.module').then( m => m.AssistantsDetailsPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./information/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'daily-event-details',
    loadChildren: () => import('./daily-event-details/daily-event-details.module').then( m => m.DailyEventDetailsPageModule)
  },
  {
    path: 'details-of-planned-events',
    loadChildren: () => import('./details-of-planned-events/details-of-planned-events.module').then( m => m.DetailsOfPlannedEventsPageModule)
  },
  {
    path: 'planned-events',
    loadChildren: () => import('./planned-events/planned-events.module').then( m => m.PlannedEventsPageModule)
  },
  {
    path: 'daily-events',
    loadChildren: () => import('./daily-events/daily-events.module').then( m => m.DailyEventsPageModule)
  },
  {
    path: 'assistants',
    loadChildren: () => import('./assistants/assistants.module').then( m => m.AssistantsPageModule)
  },
  {
    path: 'workers',
    loadChildren: () => import('./workers/workers.module').then( m => m.WorkersPageModule)
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./form/personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'information-details',
    loadChildren: () => import('./information/information-details/information-details.module').then( m => m.InformationDetailsPageModule)
  },
  {
    path: 'workers-check',
    loadChildren: () => import('./workers-check/workers-check.module').then( m => m.WorkersCheckPageModule)
  },
  {
    path: 'invitation-workers',
    loadChildren: () => import('./invitation-workers/invitation-workers.module').then( m => m.InvitationWorkersPageModule)
  },
  {
    path: 'invitation-clients',
    loadChildren: () => import('./invitation-clients/invitation-clients.module').then( m => m.InvitationClientsPageModule)
  },
  {
    path: 'clients-check',
    loadChildren: () => import('./clients-check/clients-check.module').then( m => m.ClientsCheckPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

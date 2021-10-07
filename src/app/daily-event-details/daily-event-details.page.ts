import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-event-details',
  templateUrl: './daily-event-details.page.html',
  styleUrls: ['./daily-event-details.page.scss'],
})
export class DailyEventDetailsPage implements OnInit {

  constructor(private router: Router) { }

  goInvitationWorkers(){
    this.router.navigate(['/invitation-workers'])
  }

  onClickCLose(){
    this.router.navigate(['/planned-events'])
  }

  goInvitationClients(){
    this.router.navigate(['/invitation-clients'])
  }
  ngOnInit() {
  }

}

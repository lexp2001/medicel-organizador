import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-daily-event-details',
  templateUrl: './daily-event-details.page.html',
  styleUrls: ['./daily-event-details.page.scss'],
})

export class DailyEventDetailsPage implements OnInit {

  public currentEvent: Event = null

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService) { }

  goInvitationWorkers() {
    this.router.navigate(['/invitation-workers'])
  }

  onClickCLose() {
    this.router.navigate(['/planned-events'])
  }

  goInvitationClients() {
    this.router.navigate(['/invitation-clients'])
  }

  getEvent(eventId: string) {
    this.eventService.getEventById(eventId)
      .subscribe(data => {
        this.currentEvent = data
      })
  }

  ngOnInit() {
    let eventIdFromUrl = this.route.snapshot.params.eventId
    this.getEvent(eventIdFromUrl)
  }

}

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
    this.showSnackbar()
    // this.router.navigate(['/invitation-workers'])
  }

  goInvitationClients() {
    this.showSnackbar()
    // this.router.navigate(['/invitation-clients'])
  }

  onClickCLose() {
    this.router.navigate(['/daily-events'])
  }

  getEvent(eventId: string) {
    this.eventService.getEventById(eventId)
      .subscribe(data => {
        this.currentEvent = data
      })
  }

  showSnackbar() {
    // Get the snackbar DIV
    let x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x!.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x!.className = x!.className.replace("show", ""); }, 3000);
  }

  ngOnInit() {
    let eventIdFromUrl = this.route.snapshot.params.eventId
    this.getEvent(eventIdFromUrl)
  }

}

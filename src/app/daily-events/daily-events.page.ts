import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-daily-events',
  templateUrl: './daily-events.page.html',
  styleUrls: ['./daily-events.page.scss'],
})
export class DailyEventsPage implements OnInit {

  constructor(
    private router: Router,
    private eventService: EventService) { }

  goPlannedEvents() {
    this.router.navigate(['/planned-events'])
  }

  goPersonalInformation() {
    this.router.navigate(['/personal-information'])
  }

  goEventDetails() {
    this.router.navigate(['/details-of-planned-events'])
  }

  goEventName() {
    this.router.navigate(['/event-name'])
  }

  // getEvents() {
  //   this.eventService.getEvents()
  //     .subscribe(data => {
  //       console.log(data)
  //     })
  // }

  ngOnInit() {
    //this.getEvents()
  }

}

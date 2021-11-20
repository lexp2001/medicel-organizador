import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSharedService } from '../services/event-shared.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-daily-events',
  templateUrl: './daily-events.page.html',
  styleUrls: ['./daily-events.page.scss'],
})
export class DailyEventsPage implements OnInit {
  event: any

  constructor(
    private router: Router,
    private eventService: EventService,
    private eventSharedService: EventSharedService) { }

  goPlannedEvents() {
    this.router.navigate(['/planned-events'])
  }

  goPersonalInformation() {
    this.router.navigate(['/personal-information'])
  }

  goEventDetails() {
    this.router.navigate(['/details-of-planned-events'])
  }

  onClickCreateDailyEvent() {
    this.event.eventType = "daily"
    this.router.navigate(['/event-name'])
  }

  // getEvents() {
  //   this.eventService.getEvents()
  //     .subscribe(data => {
  //       console.log(data)
  //     })
  // }

  ngOnInit() {
    this.event = this.eventSharedService
    //this.getEvents()
  }

}

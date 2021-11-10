import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event as EventInterface} from '../interfaces/event.interface'
@Component({
  selector: 'app-planned-events',
  templateUrl: './planned-events.page.html',
  styleUrls: ['./planned-events.page.scss'],
})
export class PlannedEventsPage implements OnInit {

  public eventList: EventInterface[] = [
    {
      "name": "",
      "description": "",
      "cover": "",
      "address": "",
      "date": "",
      "hour": ""
    }
  ]

  constructor(
    private router: Router,
    private eventService: EventService) { }

  goDailyEvents() {
    this.router.navigate(['/daily-events'])
  }

  goEventName() {
    this.router.navigate(['/event-name'])
  }

  goEventDetails() {
    this.router.navigate(['/daily-event-details'])
  }

  goPersonalInformation() {
    this.router.navigate(['/personal-information'])
  }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(data => {
        this.eventList = data
        console.log(this.eventList)
      })
  }

  ngOnInit() {
    this.getEvents()
  }

}

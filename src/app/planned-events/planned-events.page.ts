import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { EventInterface } from '../interfaces/event.interface'
import { EventSharedService } from '../services/event-shared.service';

@Component({
  selector: 'app-planned-events',
  templateUrl: './planned-events.page.html',
  styleUrls: ['./planned-events.page.scss'],
})

export class PlannedEventsPage implements OnInit {
  event: any

  public eventList: EventInterface[] = [
    {
      "name": "",
      "description": "",
      "cover": "",
      "address": "",
      "date": "",
      "hour": "",
      "type": ""
    }
  ]

  public listVisibility = false

  public plannedEventsArray: EventInterface[] = [
    {
      "name": "",
      "description": "",
      "cover": "",
      "address": "",
      "date": "",
      "hour": "",
      "type": ""
    }
  ]

  constructor(
    private router: Router,
    private eventService: EventService,
    private eventSharedService: EventSharedService) { }

  goDailyEvents() {
    this.router.navigate(['/daily-events'])
  }

  onClickCreatePlannedEvent() {
    this.event.eventType = "planned"
    this.router.navigate(['/event-name'])
  }

  goEventDetails(eventId: string) {
    this.router.navigate(['/daily-event-details/' + eventId])
  }

  goPersonalInformation() {
    this.router.navigate(['/personal-information'])
  }

  getEvents() {
    this.listVisibility = false
    this.eventService.getEvents()
      .subscribe(data => {
        this.eventList = data
        this.listVisibility = true
        // console.log(this.eventList)

        //let plannedEventsFromService = this.eventList.find({"type": "planned"})

    // plannedEventsFromService = this.plannedEventsArray
    //console.log(plannedEventsFromService)

  })
}

ngOnInit() {
  this.event = this.eventSharedService
  this.getEvents()
}

}

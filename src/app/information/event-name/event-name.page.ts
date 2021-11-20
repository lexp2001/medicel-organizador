import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSharedService } from 'src/app/services/event-shared.service';

@Component({
  selector: 'app-event-name',
  templateUrl: './event-name.page.html',
  styleUrls: ['./event-name.page.scss'],
})
export class EventNamePage implements OnInit {
  event: any

  constructor(
    private router: Router,
    private eventSharedService: EventSharedService) { }

  goEventDate() {
    this.router.navigate(['/event-date'])
  }
  onClickCLose() {
    this.router.navigate(['/daily-events'])
  }

  ngOnInit() {
    this.event = this.eventSharedService

    if (this.event.eventType == "planned") {
      console.log("Type is planned")
    } else if (this.event.eventType == "daily") {
      console.log("Type is daily")
    }
    this.event.eventData.type = this.event.eventType
  }

}

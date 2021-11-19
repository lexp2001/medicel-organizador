import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSharedService } from 'src/app/services/event-shared.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-information-details',
  templateUrl: './information-details.page.html',
  styleUrls: ['./information-details.page.scss'],
})
export class InformationDetailsPage implements OnInit {
  event: any

  spinnerVisibility = false

  constructor(
    private router: Router,
    private eventSharedService: EventSharedService,
    private eventService: EventService) { }

  saveEvent() {
    this.spinnerVisibility = true
    this.eventService.postEvent(this.event)
      .subscribe(data => {
        console.log(data)
        this.spinnerVisibility = false
        this.router.navigate(['/daily-events'])
      })
  }

  goName() {
    this.router.navigate(['/event-name'])
  }

  goDate() {
    this.router.navigate(['/event-date'])
  }

  goHour() {
    this.router.navigate(['/event-hour'])
  }

  goAddress() {
    this.router.navigate(['/event-address'])
  }

  goAssistants() {
    this.router.navigate(['/event-assistants'])
  }

  goWorkes() {
    this.router.navigate(['/event-workes'])
  }

  onClickCLose() {
    this.router.navigate(['/daily-events'])
  }

  ngOnInit() {
    this.event = this.eventSharedService
  }

}

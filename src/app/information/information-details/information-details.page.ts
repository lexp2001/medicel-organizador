import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSharedService } from 'src/app/services/event-shared.service';

@Component({
  selector: 'app-information-details',
  templateUrl: './information-details.page.html',
  styleUrls: ['./information-details.page.scss'],
})
export class InformationDetailsPage implements OnInit {
  event: any

  constructor(
    private router: Router,
    private eventSharedService: EventSharedService) { }

  saveEvent() {
    console.log(this.event)
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSharedService } from 'src/app/services/event-shared.service';

@Component({
  selector: 'app-event-hour',
  templateUrl: './event-hour.page.html',
  styleUrls: ['./event-hour.page.scss'],
})
export class EventHourPage implements OnInit {
  event: any

  constructor(
    private router: Router,
    private eventSharedService: EventSharedService) { }

  goEventAddress() {
    this.router.navigate(['/event-address'])
  }

  onClickCLose() {
    this.router.navigate(['/daily-events'])
  }

  ngOnInit() {
    this.event = this.eventSharedService
  }

}

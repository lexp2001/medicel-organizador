import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSharedService } from 'src/app/services/event-shared.service';

@Component({
  selector: 'app-event-cover',
  templateUrl: './event-cover.page.html',
  styleUrls: ['./event-cover.page.scss'],
})
export class EventCoverPage implements OnInit {
  event: any

  constructor(
    private router: Router,
    private eventSharedService: EventSharedService) { }

  onClickNext() {
    this.router.navigate(['/event-assistants'])
  }

  onClickCLose() {
    this.router.navigate(['/daily-events'])
  }

  ngOnInit() {
    this.event = this.eventSharedService
  }

}
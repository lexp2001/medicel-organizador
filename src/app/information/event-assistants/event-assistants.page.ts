import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSharedService } from 'src/app/services/event-shared.service';

@Component({
  selector: 'app-event-assistants',
  templateUrl: './event-assistants.page.html',
  styleUrls: ['./event-assistants.page.scss'],
})
export class EventAssistantsPage implements OnInit {
  event: any

  constructor(
    private router: Router,
    private eventSharedService: EventSharedService) { }

  goEventWorkes() {
    this.router.navigate(['/event-workes'])
  }

  onClickCLose() {
    this.router.navigate(['/daily-events'])
  }

  ngOnInit() {
    this.event = this.eventSharedService
  }

}

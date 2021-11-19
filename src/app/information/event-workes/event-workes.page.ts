import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSharedService } from 'src/app/services/event-shared.service';

@Component({
  selector: 'app-event-workes',
  templateUrl: './event-workes.page.html',
  styleUrls: ['./event-workes.page.scss'],
})
export class EventWorkesPage implements OnInit {
  event: any

  constructor(
    private router: Router,
    private eventSharedService: EventSharedService) { }

  goInformationDetails() {
    this.router.navigate(['/information-details'])
  }

  onClickCLose() {
    this.router.navigate(['/daily-events'])
  }

  ngOnInit() {
    this.event = this.eventSharedService
  }

}

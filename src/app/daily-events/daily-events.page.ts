import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-events',
  templateUrl: './daily-events.page.html',
  styleUrls: ['./daily-events.page.scss'],
})
export class DailyEventsPage implements OnInit {

  constructor(private router: Router) { }

  goPlannedEvents(){
    this.router.navigate(['/planned-events'])
  }

  goPersonalInformation(){
    this.router.navigate(['/personal-information'])
  }

  goEventDetails(){
    this.router.navigate(['/details-of-planned-events'])
  }

  goEventName(){
    this.router.navigate(['/event-name'])
  }
  ngOnInit() {
  }

}

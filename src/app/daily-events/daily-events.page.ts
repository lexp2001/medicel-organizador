import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-events',
  templateUrl: './daily-events.page.html',
  styleUrls: ['./daily-events.page.scss'],
})
export class DailyEventsPage implements OnInit {

  constructor(private router: Router) { }

  goEmail(){
    this.router.navigate(['/email'])
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

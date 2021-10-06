import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-event-details',
  templateUrl: './daily-event-details.page.html',
  styleUrls: ['./daily-event-details.page.scss'],
})
export class DailyEventDetailsPage implements OnInit {

  constructor(private router: Router) { }

  onClickCLose(){
    this.router.navigate(['/planned-events'])
  }

  ngOnInit() {
  }

}

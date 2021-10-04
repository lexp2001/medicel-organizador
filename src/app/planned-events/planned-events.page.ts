import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planned-events',
  templateUrl: './planned-events.page.html',
  styleUrls: ['./planned-events.page.scss'],
})
export class PlannedEventsPage implements OnInit {

  constructor(private router: Router) { }

  goEventDetails(){
    this.router.navigate(['/daily-event-details'])
  }

  ngOnInit() {
  }

}

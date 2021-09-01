import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-date',
  templateUrl: './event-date.page.html',
  styleUrls: ['./event-date.page.scss'],
})
export class EventDatePage implements OnInit {

 
  constructor(private router: Router) { }

  goEventHour(){
    this.router.navigate(['/event-hour'])
  }

  ngOnInit() {
  }

}

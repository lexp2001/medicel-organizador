import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-hour',
  templateUrl: './event-hour.page.html',
  styleUrls: ['./event-hour.page.scss'],
})
export class EventHourPage implements OnInit {

  constructor(private router: Router) { }

  goEventAddress(){
    this.router.navigate(['/event-address'])
  }

  ngOnInit() {
  }
  
  onClickCLose(){
    this.router.navigate(['/daily-events'])
  }

}

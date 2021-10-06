import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-name',
  templateUrl: './event-name.page.html',
  styleUrls: ['./event-name.page.scss'],
})
export class EventNamePage implements OnInit {

  constructor(private router: Router) { }

  goEventDate(){
    this.router.navigate(['/event-date'])
  }
  onClickCLose(){
    this.router.navigate(['/daily-events'])
  }

  ngOnInit() {
  }

}

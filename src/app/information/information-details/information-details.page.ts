import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-details',
  templateUrl: './information-details.page.html',
  styleUrls: ['./information-details.page.scss'],
})
export class InformationDetailsPage implements OnInit {

  constructor(private router: Router) { }

  goName(){
    this.router.navigate(['/event-name'])
  }

  goDate(){
    this.router.navigate(['/event-date'])
  }

  goHour(){
    this.router.navigate(['/event-hour'])
  }

  goAddress(){
    this.router.navigate(['/event-address'])
  }

  goAssistants(){
    this.router.navigate(['/event-assistants'])
  }

  goWorkes(){
    this.router.navigate(['/event-workes'])
  }

  onClickCLose(){
    this.router.navigate(['/daily-events'])
  }

  ngOnInit() {
  }

}

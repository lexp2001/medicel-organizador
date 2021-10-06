import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-of-planned-events',
  templateUrl: './details-of-planned-events.page.html',
  styleUrls: ['./details-of-planned-events.page.scss'],
})
export class DetailsOfPlannedEventsPage implements OnInit {

  constructor(private router: Router) { }

  goAssistants(){
    this.router.navigate(['/assistants'])
  }

  goWorkers(){
    this.router.navigate(['/workers'])
  }

  onClickCLose(){
    this.router.navigate(['/daily-events'])
  }
  ngOnInit() {
  }

}

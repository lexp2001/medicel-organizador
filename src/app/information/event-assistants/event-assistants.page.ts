import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-assistants',
  templateUrl: './event-assistants.page.html',
  styleUrls: ['./event-assistants.page.scss'],
})
export class EventAssistantsPage implements OnInit {

  constructor(private router: Router) { }

  goEventWorkes(){
    this.router.navigate(['/event-workes'])
  }
  ngOnInit() {
  }

}

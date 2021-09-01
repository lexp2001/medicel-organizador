import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.page.html',
  styleUrls: ['./event-address.page.scss'],
})
export class EventAddressPage implements OnInit {

  constructor(private router: Router) { }

  goEventAssistants(){
    this.router.navigate(['/event-assistants'])
  }

  ngOnInit() {
  }

}

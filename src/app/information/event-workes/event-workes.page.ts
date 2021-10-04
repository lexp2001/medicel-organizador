import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-workes',
  templateUrl: './event-workes.page.html',
  styleUrls: ['./event-workes.page.scss'],
})
export class EventWorkesPage implements OnInit {

  constructor(private router: Router) { }

  goInformationDetails(){
    this.router.navigate(['/information-details'])
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.page.html',
  styleUrls: ['./assistants.page.scss'],
})
export class AssistantsPage implements OnInit {

  constructor(private router: Router) { }

  goDetailsEvent(){
    this.router.navigate(['/details-of-planned-events'])
  }

  ngOnInit() {
  }

}

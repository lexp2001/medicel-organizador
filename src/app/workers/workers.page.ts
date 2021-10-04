import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.page.html',
  styleUrls: ['./workers.page.scss'],
})
export class WorkersPage implements OnInit {

  constructor(private router: Router) { }

  goDetailsEvent(){
    this.router.navigate(['/details-of-planned-events'])
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workers-check',
  templateUrl: './workers-check.page.html',
  styleUrls: ['./workers-check.page.scss'],
})
export class WorkersCheckPage implements OnInit {

  constructor(private router: Router) { }

  onClickCLose(){
    this.router.navigate(['/daily-event-details'])
  }
  

  ngOnInit() {
  }

}

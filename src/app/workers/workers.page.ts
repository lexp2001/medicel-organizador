import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from '../interfaces/worker.interface';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.page.html',
  styleUrls: ['./workers.page.scss'],
})
export class WorkersPage implements OnInit {

  public workerList: Worker[]

  constructor(
    private router: Router,
    private workerService: WorkerService) { }

  goDetailsEvent() {
    this.router.navigate(['/details-of-planned-events'])
  }

  getWorkers() {
    this.workerService.getWorkers()
      .subscribe(data => {
        this.workerList = data
        // console.log(this.workerList)
      })
  }

  ngOnInit() {
    this.getWorkers()
  }

}

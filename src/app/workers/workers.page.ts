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
  spinnerVisibility = true

  public workerList: Worker[] = [{
    "name": "",
    "surname": "",
    "email": "",
    "phone": "",
    "rut": "",
    "status": "",
    "questions": []
  }]

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
        this.spinnerVisibility = false
      })
  }

  getNumDose(doseReply: string) {
    if (doseReply.includes("segunda")) {
      return "2 dosis"
    } else if (doseReply.includes("primera")) {
      return "1 dosis"
    } else {
      return "0 dosis"
    }
  }

  ngOnInit() {
    this.getWorkers()
  }

}

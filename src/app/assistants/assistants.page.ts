import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../interfaces/participant.interface';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.page.html',
  styleUrls: ['./assistants.page.scss'],
})
export class AssistantsPage implements OnInit {

  spinnerVisibility = true

  public participantList: Participant[] = [{
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
    private participantService: ParticipantService) { }

  goDetailsEvent() {
    this.router.navigate(['/details-of-planned-events'])
  }

  getParticipants() {
    this.participantService.getParticipants()
      .subscribe(data => {
        // console.log(data)
        this.participantList = data
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
    this.getParticipants()
    console.info(this.getNumDose("Si, primera y segunda dosis"))
  }

}

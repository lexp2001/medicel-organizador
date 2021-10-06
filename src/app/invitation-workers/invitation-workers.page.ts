import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-invitation-workers',
  templateUrl: './invitation-workers.page.html',
  styleUrls: ['./invitation-workers.page.scss'],
})
export class InvitationWorkersPage implements OnInit {


  constructor(private toastCtrl: ToastController,
              private router: Router) { }

async showToast(){
  const toast = await this.toastCtrl.create({
    message: 'Invitación enviada.',
    duration: 2000
  });
  toast.present();
}


goWorkersCheck(){
  this.router.navigate(['/workers-check'])
}

goCancelInvitation(){
  this.router.navigate(['/daily-event-details'])
}

  ngOnInit() {
  }

}

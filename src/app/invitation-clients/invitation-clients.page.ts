import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-invitation-clients',
  templateUrl: './invitation-clients.page.html',
  styleUrls: ['./invitation-clients.page.scss'],
})
export class InvitationClientsPage implements OnInit {

  constructor(private toastCtrl: ToastController,
    private router: Router) { }

async showToast(){
const toast = await this.toastCtrl.create({
message: 'Invitación enviada.',
duration: 2000
});
toast.present();
}


goClientsCheck(){
this.router.navigate(['/clients-check'])
}

goCancelInvitation(){
this.router.navigate(['/daily-event-details'])
}



onClickCLose(){
this.router.navigate(['/daily-event-details'])
}

ngOnInit() {
}

}
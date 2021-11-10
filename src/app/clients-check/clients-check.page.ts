import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-check',
  templateUrl: './clients-check.page.html',
  styleUrls: ['./clients-check.page.scss'],
})
export class ClientsCheckPage implements OnInit {

  constructor(private router: Router) { }

  goDetailsEvent(){
    this.router.navigate(['/details-of-planned-events'])
  }
  ngOnInit() {
  }

}

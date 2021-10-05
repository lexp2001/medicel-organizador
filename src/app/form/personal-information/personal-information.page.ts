import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  constructor(private router: Router) { }

  goEmail(){
    this.router.navigate(['/email'])
  }

  goName(){
    this.router.navigate(['/name'])
  }

  goRubro(){
    this.router.navigate(['/rubro'])
  }

  goRut(){
    this.router.navigate(['/rut'])
  }

  
  goDailyEvents(){
    this.router.navigate(['/daily-events'])
  }

  ngOnInit() {
  }

}

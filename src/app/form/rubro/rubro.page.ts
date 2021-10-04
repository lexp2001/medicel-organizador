import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.page.html',
  styleUrls: ['./rubro.page.scss'],
})
export class RubroPage implements OnInit {

  constructor(private router: Router) { }

  goPersonalInformation(){
    this.router.navigate(['/personal-information'])
  }
  
  onClickCLose(){
    this.router.navigate(['/daily-events'])
  }
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.page.html',
  styleUrls: ['./rubro.page.scss'],
})
export class RubroPage implements OnInit {

  constructor(private router: Router) { }

  goTab1(){
    this.router.navigate(['/tabs/tab1'])
  }
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rut',
  templateUrl: './rut.page.html',
  styleUrls: ['./rut.page.scss'],
})
export class RutPage implements OnInit {

  constructor(private router: Router) { }

  goRubro(){
    this.router.navigate(['/rubro'])
  }

  onClickCLose(){
    this.router.navigate(['/daily-events'])
  }
  
  ngOnInit() {
  }

}

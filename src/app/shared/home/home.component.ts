import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router, private SpinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    this.SpinnerService.show(); 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.SpinnerService.hide();
    }, 1000);
  }

}

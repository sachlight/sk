import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-lets-work',
  templateUrl: './lets-work.component.html',
  styleUrls: ['./lets-work.component.css']
})
export class LetsWorkComponent implements OnInit {

  constructor(private wowService:NgwWowService) {
    this.wowService.init();
   }

  ngOnInit(): void {
  }

}

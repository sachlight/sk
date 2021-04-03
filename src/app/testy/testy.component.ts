import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testy',
  templateUrl: './testy.component.html',
  styleUrls: ['./testy.component.css']
})
export class TestyComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}

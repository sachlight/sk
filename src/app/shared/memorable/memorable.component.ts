import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { NgwWowService } from "ngx-wow";

@Component({
  selector: "app-memorable",
  templateUrl: "./memorable.component.html",
  styleUrls: ["./memorable.component.css"],
})
export class MemorableComponent implements OnInit {
  constructor(private wowService:NgwWowService) {
    this.wowService.init();
   }

  ngOnInit(): void {

    AOS.init({
      duration: 2000,
      easing: 'ease-out-quart',
      once: true
    });
    // AOS.init({
    //   easing: "ease-in-sine",
    //   duration: 500,
    // });
  }
}

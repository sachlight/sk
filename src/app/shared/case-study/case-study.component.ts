import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import VanillaTilt from 'vanilla-tilt';
import * as AOS from 'aos';
import { CaseService } from './case.service';
import { Case } from './case';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {

  constructor(private wowService:NgwWowService, private caseSer:CaseService) {
    this.wowService.init();
  }

  ngOnInit(): void {
    this.Featured();

    AOS.init({
      duration: 2000,
      easing: 'ease-out-quart',
      once: true
    });






    VanillaTilt.init(document.querySelector<any>("one"), {
      max: 30,
      speed: 400
    });

    // VanillaTilt.init(document.querySelector<any>("two"), {
    //   max: 30,
    //   speed: 400
    // });

    // VanillaTilt.init(document.querySelector<any>("three"), {
    //   max: 30,
    //   speed: 400
    // });

    // VanillaTilt.init(document.querySelector<any>("#four"), {
    //   max: 30,
    //   speed: 400
    // });


    // var scrollElemToWatch_4 = document.getElementById("four"),
    //     watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -400),
    //     rev6 = new RevealFx(scrollElemToWatch_4, {
    //       revealSettings: {
    //         bgcolor: "#0094ff",
    //         direction: "rl",
    //         delay: 100,
    //         onCover: function (contentEl: { style: { opacity: number; }; }, revealerEl: any) {
    //           contentEl.style.opacity = 1;
    //         },
    //       },
    //     });
    //   watcher_4.enterViewport(function () {
    //     rev6.reveal();
    //     watcher_4.destroy();
    //   });
  }

cases : Case | any;

  Featured(){

    this.caseSer.getFeatured().subscribe((res)=>{
      // this.FT = res.data;
      // console.log("This is Featured-->" + res);
      this.cases = res.data;

    })
  }

}

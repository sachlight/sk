import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import 'fullpage.js/vendors/scrolloverflow';
import { NgwWowService } from 'ngx-wow';
// import { NgwWowConfig } from 'ngx-wow';
// import 'fullpage.js/dist/jquery.fullpage.extensions.min'



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  config: any;
  fullpage_api: any;

  constructor(private wowService:NgwWowService) {
    
    this.wowService.init();
  

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      // anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      scrollOverflow: true,

      // fullpage callbacks
      afterResize: () => {
        // console.log("After resize");
      },
      afterLoad: (origin: { index: any; }, destination: any, _direction: any) => {
        // console.log(origin.index);
      }
    };
    
  }
  
  ngOnInit(){


  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }


}

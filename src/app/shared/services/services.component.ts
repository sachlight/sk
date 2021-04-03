import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { NgxSpinnerService } from 'ngx-spinner';
import * as AOS from 'aos';
// import { NgxSpinnerService } from 'ngx-spinner';
import { NgwWowService } from 'ngx-wow';
import { Tech } from './tech';
import { TechnologyService } from './technology.service';
// import * as WOW from 'wowjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  // ,private spinner: NgxSpinnerService
  constructor(private wowService:NgwWowService,
     private techService:TechnologyService, private titleSer:Title) {
    this.wowService.init();
   }

   
  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleSer.getTitle());
    this.titleSer.setTitle(title);
 }

  ngOnInit(): void {
    this.getTech();
AOS.init();
    // AOS.init({
    //   // duration:2000
    //   delay: 500,
    //   easing: 'ease-in-out'
    // });

  }

techy:Tech | any;

 getTech(){
  //  this.spinner.show();
    this.techService.getTechnology().subscribe((res)=>{
      // console.log(res);
      this.techy=res.data;
      console.log(this.techy);
      // this.spinner.hide();
      // this.sk=res.data;
      // console.log(this.sk);
    })
  }

  

}

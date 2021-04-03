import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
import { NgwWowService } from 'ngx-wow';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // isShow: boolean | any;
  topPosToStartShowing = 100;

  // @HostListener('window:scroll')
  // checkScroll() {


  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //   console.log('[scroll]', scrollPosition);
    
  //   if (scrollPosition >= this.topPosToStartShowing) {
  //     this.isShow = true;
  //   } else {
  //     this.isShow = false;
  //   }
  // }

  constructor(public router:Router, 
    private wowService:NgwWowService,
    private SpinnerService: NgxSpinnerService , private titleSer:Title){
    // this.wowService.init();
  }

  title = 'Home';

  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleSer.getTitle());
    this.titleSer.setTitle(title);
 }
 
  ngOnInit(){
    this.SpinnerService.show(); 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.SpinnerService.hide();
    }, 3000);




  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' ,
      
    });
  }



}

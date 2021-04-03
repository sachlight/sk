import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
// import {  } from 'ngx-wow'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // state = 'hide'
  constructor(private titleSer:Title) { }

  public _opened: boolean = false;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  
  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleSer.getTitle());
    this.titleSer.setTitle(title);
 }

  

  close(){
    $("#mySidenav").css("width","0%");
  }

  open(){
    $("#mySidenav").css("width","100%");
  }

  ngOnInit(): void {


    // const wow = new WOW(
    //   {
    //   boxClass:     'wow',      // default
    //   animateClass: 'animated', // default
    //   offset:       0,          // default
    //   mobile:       true,       // default
    //   live:         true        // default
    // }
    // )
    // wow.init();






    $(document).ready(function(){
      $(".hide").click(function(){
        $("#oho").hide();
        $('#show').removeClass('close');
       
      });


      $(".lines-button").click(function(){
        $("#oho").show();
        $("#oho").addClass('open');
      });


    });


  }

}

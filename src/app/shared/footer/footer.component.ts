import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';
import { Tech } from '../services/tech';
import { TechnologyService } from '../services/technology.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private wowService:NgwWowService, private titleSer:Title, private techservice:TechnologyService) {
    this.wowService.init();
   }

   setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleSer.getTitle());
    this.titleSer.setTitle(title);
 }

  ngOnInit(): void {
    this.getTechy();
  }

  techy:Tech | any

  getTechy(){
    this.techservice.getTechnology().subscribe((res)=>{
      this.techy = res.data;
    
    })
  }

}

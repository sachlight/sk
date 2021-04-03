import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// import { Swiper, SwiperOptions } from 'swiper';/



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  // mySwiper: Swiper | any;



  onSwiper(swiper:any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log("slide change");  
  }

  constructor(private wowService:NgwWowService) {
    this.wowService.init();
   }

  ngOnInit(): void {
  }

}

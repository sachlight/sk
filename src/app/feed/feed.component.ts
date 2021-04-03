import { Component, OnInit } from '@angular/core';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log("slide change");  
  }

  constructor() { }

  ngOnInit(): void {
  }

}

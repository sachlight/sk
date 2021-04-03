import { Component, OnInit } from '@angular/core';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import { Feed } from '../feed';
import { FeedbackService } from '../feedback.service';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-client-feed',
  templateUrl: './client-feed.component.html',
  styleUrls: ['./client-feed.component.css']
})
export class ClientFeedComponent implements OnInit {
  onSwiper(swiper:any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log("slide change");  
  }
  constructor(private service:FeedbackService) { 
  }

  ngOnInit(): void {
    this.getFeedback();
  }
  
  Feedy : Feed | any



  getFeedback(){
    this.service.getFeedback().subscribe(res=>{
      this.Feedy = res.data;
      // console.log(this.Feedy);
    })
  }

}

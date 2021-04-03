import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { MainSliderService } from './main-slider.service';
import { Slider } from './slider';
// import { NgxSpinnerService } from "ngx-spinner";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,EffectFade,Swiper,EffectCube, EffectCoverflow,EffectFlip,Mousewheel, 
} from 'swiper/core';




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectFade,EffectCube,EffectCoverflow,EffectFlip,Mousewheel]);



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit, OnInit {


  // private SpinnerService: NgxSpinnerService
  constructor(private wowService:NgwWowService, private mainService:MainSliderService) {
    this.wowService.init();
   }

   ngOnInit():void{
     this.getSd();

 
   }
   autoplay :any;

  //  move() {
  //   var elem = document.getElementById("progress"); 
  //   var width = 1;
  //   var autoplayTime = 5000 / 100;
  //   var id = setInterval(frame, autoplayTime);
  //   function frame() {
  //       if (width >= 100) {
  //           clearInterval(id);
  //       } else {
  //           width++; 
  //           // elem.style.width = width + '%'; 
  //       }
  //   }
  // }





  ngAfterViewInit(){
    // this.getSd();

    // jQuery(".tp-banner").revolution({
    //   delay: 3500,
    //   startwidth: 1170,
    //   onHoverStop: "off",
    //   startheight: 900,
    //   hideThumbs: 10,
    //   fullWidth: "off",
    //   fullScreen: "on",
    //   /*parallax: "mouse", parallaxBgFreeze: "on", parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],*/
    //   fullScreenOffsetContainer: "",
    // });

   
  }

  item:Slider | any;

  onSwiper(swiper : any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

  getSd(){
    // this.SpinnerService.show();  
    this.mainService.getSlider().subscribe((res)=>{
      // console.log(res);
      this.item=res.data;
     
      // console.log(this.item);
      // this.SpinnerService.hide();  
    })
  }



}

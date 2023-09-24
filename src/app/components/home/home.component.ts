import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public router:Router
    ) {
      
     }
     config: SwiperOptions = {
      a11y: { enabled: true },
      direction: 'horizontal',
      slidesPerView: 1,
      keyboard: true,
      mousewheel: false,
      scrollbar: false,
      pagination: true,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    }; 

  ngOnInit(): void {
  }

}

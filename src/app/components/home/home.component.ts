import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router} from '@angular/router';
import { SwiperOptions } from 'swiper';
import { ScriptService } from '@app/services/script.service';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked {
  public initializeSwiper = false;
  // config: SwiperOptions = {
  //   pagination: { el: '.swiper-pagination', clickable: true },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   spaceBetween: 30
  // };
  
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 2,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  constructor(
    public router:Router,
    public script:ScriptService,
    public yeoman:Yeoman
    ) {
      this.script.load(
        // 'jquery',
        // 'bootstrap',
        'owlCarousel',
        'isotope',
        'slick',
        'magnificPopup',
        'meanmenu',
        'metisMenu',
        'niceSelect',
        'ajaxForm',
        'wow',
        'counterup',
        'waypoints',
        'scrollUp',
        'imagesLoaded',
        'magnificPopup2',
        'easypiechart',
        'tilt',
        'plugins',
        'main'
                  )
     }
    
    

     ngAfterViewChecked() {
      if (!this.initializeSwiper) {
        // Inicializa el Swiper aquí
        this.initializeSwiper = true;
      }
    }

}

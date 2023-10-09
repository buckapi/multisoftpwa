import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router} from '@angular/router';
import { SwiperOptions } from 'swiper';
import { ScriptService } from '@app/services/script.service';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  clients:any;
  categories:any;
  config2: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };

  constructor(
    public router:Router,
    public script:ScriptService,
    public yeoman:Yeoman,
    public dataApiService: DataApiService

    ) {
      this.script.load(
        'modernizr',
        'jquery',
        'bootstrap-bundle',
        'owl-carousel',
        'isotope',
        'slick',
        'magnific-popup',
        'meanmenu',
        'metisMenu',
        'nice-select',
        'ajax-form',
        'wow',
        'counterup',
        'waypoints',
        'scrollUp',
        'imagesloaded',
        'magnific-popup',
        'easypiechart',
        'tilt',
        'main'
      );
    this.getAll();
    this.loadCategories();
     }
    
     setClient(i:any){
      let indice= i;
      this.dataApiService.getAllClient().subscribe(
       response => {
         this.clients = response;}
       )
     }
     getAll(){
   
      this.dataApiService.getAllClient().subscribe(response=> {
        this.yeoman.allclient=response;
     
      });
    }
    setCategory(i:any){
      let indice= i;
      this.dataApiService.getAllCategory().subscribe(
       response => {
         this.categories = response;}
       )
     }
   
     loadCategories(){
       this.dataApiService.getAllCategory().subscribe(
         response => {
           this.categories = response;
           console.log("Categorías cargadas:", this.categories);
         },
         error => {
           console.error("Error al cargar las categorías:", error);
         }
       );
     }

     ngAfterViewInit(): void {
    }
  

}

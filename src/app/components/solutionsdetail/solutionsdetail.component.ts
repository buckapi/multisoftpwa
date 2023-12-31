import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-solutionsdetail',
  templateUrl: './solutionsdetail.component.html',
  styleUrls: ['./solutionsdetail.component.css']
})
export class SolutionsdetailComponent implements OnInit, AfterViewInit {
  categories:any;
  clients:any;
  products:any=[];
  constructor(
    public yeoman: Yeoman,
    public dataApiService: DataApiService,
    public router: Router
  ) {
    this.loadCategories();
    this.getAll();
console.log("seted: "+JSON.stringify(this.yeoman.preview.name));
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
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
   
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductList } from '../products/productList';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products=new ProductList();
  selectedCategory:any=[]
  selectedName!:string;
  starsList:any=[]
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProduct();
  }

  

  getCategories(){
    let route:string;
    this.router.paramMap.subscribe(params=>{
      route=params.get('name')!;
      this.selectedCategory=this.products.productList.filter(i=>i.category===route)

    })
  }

  getProduct(){
    this.router.paramMap.subscribe(params=>{
      this.selectedName=params.get('name')!;
    })
  
  }

  getStars(stars:string){
    this.starsList=[];
    for(let i=0;i<+stars;i++){
      this.starsList.push('fas fa-star')
    }
    return this.starsList;
    
  }

  sortMax(){
    this.selectedCategory.sort(function(a:any,b:any){return b.price-a.price})

  }

  sortMin(){
    this.selectedCategory.sort((a:any,b:any)=>{return a.price-b.price})
    
  }


}

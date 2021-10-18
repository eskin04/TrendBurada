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
  starsList:any=[]
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    let route:string;
    this.router.paramMap.subscribe(params=>{
      route=params.get('name')!;
      this.selectedCategory=this.products.productList.filter(i=>i.category===route)

    })
  }

  getStars(stars:string){
    this.starsList=[];
    for(let i=0;i<+stars;i++){
      this.starsList.push('fas fa-star')
    }
    return this.starsList;
    
  }


}

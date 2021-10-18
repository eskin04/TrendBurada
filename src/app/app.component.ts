import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductList } from './products/productList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trendburada';
  productList=new ProductList().productList;
  selectedProduct:any;
  constructor(private router?:Router){

  }
  getSearch(value:string){
    this.selectedProduct=this.productList.find(i=>i.name?.toLowerCase().includes(value)|| i.name?.toUpperCase().includes(value)|| i.name?.includes(value))
    let id=this.selectedProduct.id;
    let category=this.selectedProduct.category
    this.router!.navigate(['category',category,id])
    
  }
}

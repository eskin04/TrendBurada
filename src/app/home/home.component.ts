import { Component, OnInit } from '@angular/core';
import { ProductList } from '../products/productList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products=new ProductList()
  constructor() { }

  ngOnInit(): void {
  }
  getProducts(){
    return this.products.productList;
  }

 setCategories(category:string|undefined){
  let message;
  
   switch (category) {
     case 'Bilgisayar':
       message='larda'
       break;
     case 'Telefon':
       message='larda'
       break;
    case 'Aksesuar':
      message='larda'
      break;
     case 'Ayakkabı':
       message='larda'
       break;
     case 'Kozmetik':
       message='lerde'
       break;
     case 'Giyim':
       message='de'
       break;
   }
   return message
 }

 setPrice(category:string|undefined){
  let message;
  
   switch (category) {
     case 'Bilgisayar':
       message='2. üründe 20% ye varan indirimler'
       break;
     case 'Telefon':
       message='Sepette anında 50% indirim'
       break;
    case 'Aksesuar':
      message='3 al 2 öde'
      break;
     case 'Ayakkabı':
       message='Sepette anında 40% indirim'
       break;
     case 'Kozmetik':
       message='400 tl ve üzeri alışverişlerinizde anında 100 tl indirim'
       break;
     case 'Giyim':
       message='Jeanlarda 50% ye varan indirimler'
       break;
   }
   return message
 }


}

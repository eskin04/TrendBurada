import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/commentsList';
import { Product } from '../product';
import { ProductList } from '../productList';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products:Product[]=new ProductList().productList;
  selectedProduct:any;
  starsList:any=[];
  comments:Comments=new Comments();
  selectedComments:any=[];
  constructor(private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getNavigateById();
    this.getComments();
  }

  getNavigateById(){
    this.route.paramMap.subscribe(param=>{
      let id=+param.get('id')!;
      this.selectedProduct=this.products.find(i=>i.id===id);
    })
  }

  getStars(stars:string){
    this.starsList=[];
    for(let i=0;i<+stars;i++){
      this.starsList.push('fas fa-star')
    }
    return this.starsList;
    
  }

  getComments(){
    this.selectedComments=this.comments.commentList.filter(i=>i.id===this.selectedProduct.id)
    if(!this.selectedComments.length){
      this.selectedComments.push({comment:'Henüz Bir Yorum Yapılmamış'})
      return false
    }else{
      return true
    }
    
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'',component:HouseComponent},
    {path:'category/:name',component:CategoriesComponent},
    {path:'category/:name/:id',component:ProductDetailComponent}
  ]},
  {path:'home',component:HomeComponent,children:[
    {path:'',component:HouseComponent},
    {path:'category/:name',component:CategoriesComponent},
    {path:'category/:name/:id',component:ProductDetailComponent}
  ]},
  {path:'log/:name',component:LoginComponent},
  {path:'sepet',component:BasketComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

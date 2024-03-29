import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AdComponent } from './ad/ad.component';
import { MarkaComponent } from './marka/marka.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './login/login.component';
import { HouseComponent } from './house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,
    UsersComponent,
    HomeComponent,
    AdComponent,
    MarkaComponent,
    ProductDetailComponent,
    BasketComponent,
    LoginComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

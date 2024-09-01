import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './container/nav/nav.component';
import { HeaderComponent } from './container/header/header.component';
import { ProductsComponent } from './container/products/products.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './container/footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [NavComponent,HeaderComponent,ProductsComponent,FooterComponent,ContainerComponent,CategoriesComponent],
  imports: [
    CommonModule,FormsModule,BrowserModule,RouterModule
  ],
  exports:[
    NavComponent,HeaderComponent,ProductsComponent,FooterComponent,ContainerComponent,CategoriesComponent
  ]

})
export class HOMEModule { }

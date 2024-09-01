import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HOMEModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,CommonModule,HOMEModule,ProductsModule,CartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

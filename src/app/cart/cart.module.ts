import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HOMEModule } from '../home/home.module';




@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,HOMEModule],
  exports:[CartComponent]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndproComponent } from './indpro/indpro.component';
import { FormsModule } from '@angular/forms';
import { HOMEModule } from '../home/home.module';



@NgModule({
  declarations: [IndproComponent],
  imports: [
    CommonModule,FormsModule,HOMEModule
  ],
  exports:[IndproComponent]
})
export class ProductsModule { }

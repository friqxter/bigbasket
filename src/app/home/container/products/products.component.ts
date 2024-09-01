import { Component,Input,OnInit } from '@angular/core';
import { productservice } from '../../../Services/product.service';
import { SearchService } from '../../../Services/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products:any;
products2:any;
constructor(private productservice: productservice, private searchService: SearchService){}
 ngOnInit(){
  this.products=this.productservice.products;
  this.searchService.getSearch().subscribe(res=>{
    this.searchTexts=res;
    if(this.searchTexts!==''){
      this.products2=this.products.filter(x=>x.productName.toLowerCase().includes(this.searchTexts.toLowerCase()));
      console.log('Text is changed '+this.products2.productName);
    }
  }
  )
 }
 searchTexts: string='';
}

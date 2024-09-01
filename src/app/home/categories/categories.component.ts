import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productservice } from '../../Services/product.service';
import { SearchService } from '../../Services/search.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products:any;
  categoryNames=[{name:'organic'},{name:'fresh'},{name:'sales'},{name:'expired'},{name:'discount'}];
  fruitNames=[{name:'Apples'},{name:'Oranges'},{name:'Strawberry'},{name:'Banana'},{name:'Pumpkin'}];
  categoryname:string;
  searchTexts: string='';
constructor(private product: productservice,private activatedroute: ActivatedRoute,private searchService: SearchService){}
  ngOnInit(): void {
    this.categoryname=this.activatedroute.snapshot.paramMap.get('category');
    this.products=this.product.products.filter(x=>x.categoryName.toLowerCase().includes(this.categoryname.toLowerCase()));
    this.searchService.getSearch().subscribe(res=>{
      this.searchTexts=res;
      this.products=this.products.filter(x=>x.productName.toLowerCase().includes(this.searchTexts.toLowerCase()));
    }
    )
  }
}

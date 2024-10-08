import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productservice } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

  constructor(private pl: productservice) { }
  getProducts(){
    console.log(this.cartItemList);
    return this.productList.asObservable();
    
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any, val:number){
    for (let i = 0; i < val; i++) {
      this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    }
    console.log(this.cartItemList)
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}

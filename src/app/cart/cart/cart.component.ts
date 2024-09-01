import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  constructor(private cartService : CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      console.log(res);
      this.products = res;
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  navigate(){
    this.router.navigateByUrl('/home');
  }
}

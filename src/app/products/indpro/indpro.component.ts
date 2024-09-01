import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productservice } from '../../Services/product.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-indpro',
  templateUrl: './indpro.component.html',
  styleUrls: ['./indpro.component.css'],
})
export class IndproComponent {
  noprods: number = 0;
  productIdd: any;
  productList: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private productservice: productservice,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    console.log('Hey this is not working');
    this.productIdd = this.activatedroute.snapshot.paramMap.get('id');
    this.productList = this.productservice.products.find((x) => x.productId == this.productIdd);
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item, this.noprods);
  }
  plus() {
    this.noprods += 1;
  }
  minus() {
    if (this.noprods > 0) {
      this.noprods -= 1;
    }
  }
}

import { Component } from '@angular/core';
import { productservice } from './Services/product.service';
import { UserService } from './Services/user.service';
import { CartService } from './Services/cart.service';
import { SearchService } from './Services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService,productservice,UserService,SearchService],
})
export class AppComponent {
  title = 'bb';
  // constructor(private userService: UserService,private cartService: CartService, private productService: productservice){
    
  // }
}

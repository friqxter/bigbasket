import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { CartService } from '../../../Services/cart.service';
import { SearchService } from '../../../Services/search.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
 
})
export class NavComponent implements OnInit{
  constructor(private router: Router, private userService: UserService, private cartService: CartService, private searchService: SearchService){
  }
  ngOnInit(){    
  this.userService.getName()
    .subscribe(res=>{
      this.nameDisplay = res;
    })

    this.userService.getBool()
    .subscribe(res=>{
      this.displayNotification = res;
    })
  
      this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    }
    
sitename='Shopping';
onClick(){
    this.router.navigateByUrl('/login');
}
onClick2(){
  this.router.navigateByUrl('/cart');
}
onClick3(){
this.searchService.setSearch(this.searchText);
console.log(this.searchText);
}

displayNotification: boolean=false;
    nameDisplay: string='Login/Signup';
    totalItem : number = 0;
    searchText: string='';
  
}

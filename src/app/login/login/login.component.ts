import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent {
var1: boolean =true;
  login: any= {
    userName:'',
    password:''
  }

  userinfo:{name: string, pass: string}[]=[{
    name:'kunal',pass:'admin'
  },
{
  name:'thakur',pass:'admin'
}]
  constructor(private router: Router, private userService: UserService){}

  onClick(){
if(this.userinfo.find(o=>o.pass==this.login.password && o.name==this.login.userName)){
  this.userService.setName(this.login.userName);
  this.userService.setBool(true);
  this.router.navigateByUrl('/home');
}
else {
  alert('Wrong Credentials');
}

  }
}

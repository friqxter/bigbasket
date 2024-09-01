import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  footerData=[{name:'About Us'},{name:'Become A bigbasket Rider'},{name:'In News'},{name:'Green bigbasket'},{name:'Privacy Policy'},{name:'Affiliate'},{name:'Terms & Conditions'},{name:'Careers at bigbasket'}];
  constructor() { }

  ngOnInit(): void {
  }

}

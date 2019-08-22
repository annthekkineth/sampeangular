import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product=[];
  cart=[];
  view:Boolean=false;
  constructor() {

    this.product=[{name:"Printer",price:8000,company:"HP"},{name:"Scanner",price:12000,company:"HP"},{name:"Webcam",price:3000,company:"HP"}]
   }

   public add(a,b,c){
     //console.log(a);
     let data={name:a,price:b,company:c};
     this.cart.push(data);
   }

   public remove(i){
       this.cart.splice(i, 1) 
   }

   public show(){
     this.view=true;
   }

public hide(){
  this.view=false;
}

  ngOnInit() {
  }

}

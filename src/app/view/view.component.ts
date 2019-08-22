import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Name:String;
  age:Number;
  Address;
  Hobbies:String[];
  //food:{breakfast:"Milk",lunch:"Fish",dinner:"Meat"}
  meals=[];
  constructor() {

    this.Name="Amy";
    this.age=20;
    this.Address={no:486,street:"line1"};
    this.Hobbies=["Meowing","Playing","Sleeping"];
    this.meals=[{breakfast:"Milk",lunch:"Fish",dinner:"Meat"},{breakfast:"Biscuits",lunch:"Chicken",dinner:"Fish"}]
   }


   public add(){
      let data={breakfast:"Rice",lunch:"Meat",dinner:"Milk"};
      this.meals.push(data);
   }

   public remove(){
     this.meals.pop();
   }

  ngOnInit() {
  }

}

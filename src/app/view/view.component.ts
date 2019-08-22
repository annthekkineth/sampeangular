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
  constructor() {

    this.Name="Amy";
    this.age=20;
    this.Address={no:486,street:"line1"};
    this.Hobbies=["Reading","Dancing"];
   }


  ngOnInit() {
  }

}

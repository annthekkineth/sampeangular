import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  nam:String;
  view:Boolean=false;
  view1:Boolean=false;
  n1:any;
  n2:any;
  s:Number;
  d:Number;
  constructor() { }

  public send(){
    this.view=true;
  }

  public add(){
    this.s=parseInt(this.n1);
   
    if(this.s>50)
    {this.n2="Passed";
    this.view=true;
  }
      else{
        this.n2="Failed";
    this.view=true;
      }
  }

  public diff(){
    this.d=parseInt(this.n1);
    this.view1=true;
  }
  ngOnInit() {
  }

}

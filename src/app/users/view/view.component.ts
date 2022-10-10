import { Component, OnInit } from '@angular/core';
import {UserdataService} from './userdata.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  // constructor() { }
// @Input() user:any=[]; 
user:any=[];
skill:any=[]

  ngOnInit(): void {


  }

  constructor(private data:UserdataService)
  {
    console.log("data" ,data.func());
    this.user=data.func();
    this.skill=data.func2();
  }
}

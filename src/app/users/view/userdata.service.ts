import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
users:any[]=[
  // {name:'Danshu',age:'20'},
  // {name:"suki",age:'25'},
  // {name:'luna',abe:'18'}
];
skills:any[]=[];
  constructor() { }
  func()
  {
    return this.users; 
  }
  func2()
  {
    return this.skills;
  }
  addUser(userdata:any)
  {
    console.log('hello');
    console.log(userdata.value);
    this.users.push(userdata.value);
  }
  addskill(arr:any)
  {
    console.log(arr);
    this.skills.push(arr);
  }
}

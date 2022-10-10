

import {UserdataService} from '../view/userdata.service';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
  // providers:[UserdataService]
})
export class CreateComponent implements OnInit {

  constructor(private userdata:UserdataService) {
    
   }
   skillArr:array[]=[];
  
  getSkill()
  {
    this.skillArr=[
      {id:1,name:"C",isselected:false},
      {id:2,name:'C++',isselected:false},
      {id:3,name:'Java',isselected:false},
      {id:4,name:'Python',isselected:false},
      {id:5,name:'Javascript',isselected:false}
    ]
  }
  onchange(t:any)
  {
    console.log(t);
    // this.skillArr.
    this.skillArr.forEach( (item) => {
     if(item.id == t)
     {
      item.isselected=!item.isselected;
     }
  });
    console.log(this.skillArr);
  }


  ngOnInit(): void {
    this.getSkill();
  }

  formData = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$' )]),
    gender: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    category: new FormControl('',[Validators.required]),
    // skill1: new FormControl(''),
    // skill2: new FormControl(''),
    // skill3: new FormControl(''),
    // skill4: new FormControl(''),
    // skill5: new FormControl(''),
    profile: new FormControl(''),

  });

  onsubmit()
  {
    console.log('create component');
    this.userdata.addUser(this.formData);
    this.userdata.addskill(this.skillArr);
    console.log(this.formData.value);
  }
check(id:string)
{
  console.log("it is checkbox console");
  console.log(id);
}
  
  get nameValid()
  {    return this.formData.get('name');   } 
  get genderValid()
  {    return this.formData.get('gender');   }
  get emailValid()
  {    return this.formData.get('email');   }
  get phoneValid()
  {    return this.formData.get('phone');   }
  get categValid()
  {    return this.formData.get('category');  }
  get profileValid()
  {    return this.formData.get('profile');   }
}

class array
{
  id:number=0;
name:string='';
isselected:boolean=false;
}
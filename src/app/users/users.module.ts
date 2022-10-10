import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
// import { ExtComponent } from './ext/ext.component';
// console.log("hello");

@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class UsersModule { }

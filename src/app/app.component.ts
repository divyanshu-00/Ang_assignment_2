import { Component } from '@angular/core';
import {UserdataService} from './users/view/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserdataService]
})
export class AppComponent {
  title = 'Assign_2';
  // constructor(private data:ServiceService)
  // {
  //   console.log("data" ,data.func());
  // }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {ExtComponent} from './users/ext/ext.component';
const routes: Routes = [
    {
      path:'users' , loadChildren:()=>import('./users/users.module').then(mod=>mod.UsersModule)
    }
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

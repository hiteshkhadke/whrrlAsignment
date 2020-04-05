import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FillInfoComponent} from './fill-info/fill-info.component';


const routes: Routes = [
  {    
    path: 'fillInfo',    
    component: FillInfoComponent,    
    data: {    
      title: 'fillInfo Page'    
    }    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

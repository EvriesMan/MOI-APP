import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApporderComponent } from './apporder/apporder.component';
import { EditorderComponent } from './editorder/editorder.component';
import { VieworderComponent } from './vieworder/vieworder.component';


const routes: Routes = [
  {path:'', component:VieworderComponent},
  {path:'edit/:id',component: EditorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderService } from './servises/order.service';
import { ApporderComponent } from './apporder/apporder.component';
import { EditorderComponent } from './editorder/editorder.component';
import { VieworderComponent } from './vieworder/vieworder.component';

@NgModule({
  declarations: [
    AppComponent,
    ApporderComponent,
    EditorderComponent,
    VieworderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

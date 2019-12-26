import { Injectable } from '@angular/core';


class Order{
  id: number;
  Name: string;
  OrderDate: Date
}


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  
  orders: Order[];
  private id:number=1;

  AddOrder(name:string){
    var order = new Order();
    order.Name = name;
    order.OrderDate = new Date();
    order.id = this.id;
    this.id++;
    this.orders.push(order);
  }

  DeleteOrder(id:number){
    var index = this.orders.indexOf(this.orders.find(order => order.id == id));
    this.orders.splice(index, 1);
  }

  EditOrder(id:number , name:string){
     this.orders.find(order => order.id == id) .Name = name;
  }
}

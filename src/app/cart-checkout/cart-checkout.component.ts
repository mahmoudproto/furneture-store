import { Item } from './../models/item.model';
import { DataControlService } from './../services/DataControl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  cartItemsList:Item[]=[];
  totalItemsCount:number=0;
  totalPrice:number=0;

  constructor(private dataCS:DataControlService) { }

  ngOnInit(): void {

    for (let index = 0; index < this.dataCS.cartItems.length; index++) {
      this.cartItemsList.push(this.dataCS.shopItems.find(i=>i.id==this.dataCS.cartItems[index].itemID));
    }

    this.calculatePrice();
  }

  calculatePrice(){
this.totalPrice=0;
this.totalItemsCount=0;
    for (let index = 0; index < this.dataCS.cartItems.length; index++) {
      this.totalPrice+=this.cartItemsList.find(i=>i.id==this.dataCS.cartItems[index].itemID).price
      *
      this.dataCS.cartItems[index].quantity;
      this.totalItemsCount+=this.dataCS.cartItems[index].quantity;
    }

  }

}

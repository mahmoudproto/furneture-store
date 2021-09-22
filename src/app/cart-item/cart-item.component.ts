import { DataControlService } from './../services/DataControl.service';
import { Item } from './../models/item.model';
import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartitem:Item;

  @Output()
  QuantityChange=new EventEmitter<{newQuantity:number}>();

  quantity:number;

  constructor(private dataCS:DataControlService) { }

  ngOnInit(): void {
    this.quantity=this.dataCS.cartItems.find(i=>i.itemID==this.cartitem.id).quantity;
  }

  onQuantityChanged(){
    const cartItemindex= this.dataCS.cartItems.findIndex(i=>i.itemID==this.cartitem.id);
    this.dataCS.cartItems[cartItemindex].quantity=this.quantity;
    this.QuantityChange.emit({newQuantity:this.quantity});
    console.log("quantity changed"+this.dataCS.cartItems.find(i=>i.itemID==this.cartitem.id).quantity);
  }

}

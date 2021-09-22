import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {tap} from 'rxjs/operators'
import { Item } from './../models/item.model';

@Injectable()
export class DataControlService implements OnInit{

  shopItems:Item[]=[];
  cartItems:{itemID:number,quantity:number}[]=[];
  constructor(private  http:HttpClient){

  }

  ngOnInit(): void {

  }

  getAllItems(){
   return this.http.get<Item[]>('http://localhost:8080/api/items').pipe(tap(items=>{
        this.shopItems=items;
        console.log("data loaded")
      })
    );
  }

  addItemToCart(inItemID:number){
    if(this.cartItems.find(i=>i.itemID===inItemID))
    alert("item already exists");
    else{
    this.cartItems.push({itemID:inItemID,quantity:1});
    alert("item added to cart successfully");}
  }
}

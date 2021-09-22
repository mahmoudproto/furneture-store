import { DataControlService } from './../services/DataControl.service';
import { Item } from './../models/item.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input()
  item:Item;

  constructor(private dataCS:DataControlService,private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.item=this.dataCS.shopItems[this.route.snapshot.params['id']];
  }

  addToCart(){
    this.dataCS.addItemToCart(this.item.id);
  }

}

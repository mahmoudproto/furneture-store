import { Item } from './../models/item.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {

  @Input()
  item:Item;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewItemDetails(){
    this.router.navigate(['/ItemDetails',this.item.id-1]);
  }

}

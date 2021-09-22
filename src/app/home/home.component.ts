import { Router } from '@angular/router';
import { DataControlService } from './../services/DataControl.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:Item[];

  constructor(private dataCS:DataControlService,private router:Router) { }

  ngOnInit(): void {
    this.items=this.dataCS.shopItems;
  }


}

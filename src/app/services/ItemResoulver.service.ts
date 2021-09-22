import { Injectable } from '@angular/core';
import { DataControlService } from './DataControl.service';
import { Item } from './../models/item.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class ItemResolverService implements Resolve<Item[]>{

  constructor(private dataCS:DataControlService){

  }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.dataCS.getAllItems();
  }
}

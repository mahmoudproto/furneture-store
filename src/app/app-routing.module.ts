import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { ItemResolverService } from './services/ItemResoulver.service';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'',component:HomeComponent,resolve:[ItemResolverService]},
    {path:'UserHome',component:HomeComponent,resolve:[ItemResolverService]},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignUpComponent},
    {path:'cart',component:CartCheckoutComponent},
    {path:'ItemDetails/:id',component:ItemDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

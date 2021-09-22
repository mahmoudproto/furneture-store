import { ItemResolverService } from './services/ItemResoulver.service';
import { DataControlService } from './services/DataControl.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeItemComponent } from './home-item/home-item.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    HomeItemComponent,
    HomeComponent,
    ItemDetailsComponent,
    CartCheckoutComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataControlService,ItemResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }

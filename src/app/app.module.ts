import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiServiceService } from './api-service.service';

import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';


import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

 import {MatFormFieldModule, MatSelectModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
       { path: 'shipping', component: ShippingComponent },
       { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    TestComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, ApiServiceService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
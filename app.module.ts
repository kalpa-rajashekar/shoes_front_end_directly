import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import {FormsModule} from '@angular/forms';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { ShoesComponent } from './admin/shoes/shoes.component';
import { AddShoesComponent } from './admin/shoes/add-shoes/add-shoes.component';

import { ViewShoesComponent } from './admin/shoes/view-shoes/view-shoes.component';
import { ShopshoesComponent } from './shopshoes/shopshoes.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ShoesComponent,
    AddShoesComponent,
    ViewShoesComponent,
    ShopshoesComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

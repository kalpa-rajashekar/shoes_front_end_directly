import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesComponent } from './admin/shoes/shoes.component';
import { ViewShoesComponent } from './admin/shoes/view-shoes/view-shoes.component';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { UsersComponent } from './admin/users/users.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { MenuComponent } from './menu/menu.component';
import { ShopshoesComponent } from './shopshoes/shopshoes.component';

const routes: Routes = [
 {path: 'adminusers', component: UsersComponent},
 {path:'menu',component:MenuComponent},
  {path:'viewuser',component:ViewuserComponent},
  {path:'adduser',component:AdduserComponent},
  {path: 'shoeusers', component:ShoesComponent},
  {path: 'viewusers', component:ViewShoesComponent},
  {path: 'shop', component: ShopshoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

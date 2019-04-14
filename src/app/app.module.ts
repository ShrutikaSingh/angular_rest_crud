import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import{HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SingleComponent } from './single/single.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';

import{UserService} from "./user.service";

import { CatsComponent } from './cats/cats.component';

const routes : Routes = [
  {path:"",component:UsersComponent},
  {path:"single/:id",component:SingleComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"delete/:id",component:DeleteComponent},
  {path:"add",component:AddComponent},

  {path:"cats",component:CatsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SingleComponent,
    EditComponent,
    DeleteComponent,
    AddComponent,
   
    CatsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

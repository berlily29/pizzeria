import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    EditAccountComponent,
    AddAccountComponent,
    AccountListComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SweetAlert2Module,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }

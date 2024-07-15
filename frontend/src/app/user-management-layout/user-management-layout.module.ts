import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementLayoutRoutingModule } from './user-management-layout-routing.module';
import { UserManagementLayoutComponent } from './user-management-layout.component';



@NgModule({
  declarations: [
    UserManagementLayoutComponent,

  ],
  imports: [
    CommonModule,
    UserManagementLayoutRoutingModule
  ]
})
export class UserManagementLayoutModule { }

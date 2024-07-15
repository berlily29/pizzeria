import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AccountListComponent } from './account-list/account-list.component';

const routes: Routes = [
  {
    path: 'account-list',
    component: AccountListComponent
  },
  {
    path: 'add-account',
    component: AddAccountComponent
  },
  {
    path: 'edit-account',
    component: EditAccountComponent
  },
  {
    path: '',pathMatch: 'full', redirectTo: 'account-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { 


}

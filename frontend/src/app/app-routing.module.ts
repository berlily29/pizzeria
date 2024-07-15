import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './user-management-layout/pages/land/land.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user-management-layout/user-management-layout.module').then(m => m.UserManagementLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

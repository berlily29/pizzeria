import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './pages/land/land.component';
import { HomeComponent } from './pages/home/home.component';
import { UserManagementLayoutComponent } from './user-management-layout.component';

const routes: Routes = [
  
  {
    path: '',
    component: LandComponent,
    loadChildren: () => import('./pages/land/land.module').then(m=>m.LandModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./pages/home/home.module').then(m =>m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementLayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandRoutingModule } from './land-routing.module';
import { LandComponent } from './land.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandComponent
  ],
  imports: [
    CommonModule,
    LandRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LandModule {

 }

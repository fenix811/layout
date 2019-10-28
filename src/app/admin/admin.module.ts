import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPage1Component } from './admin-page1/admin-page1.component';
import { AdminPage2Component } from './admin-page2/admin-page2.component';



@NgModule({
  declarations: [
    AdminPage1Component,
    AdminPage2Component,
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPage1Component } from './admin-page1/admin-page1.component';
import { AdminPage2Component } from './admin-page2/admin-page2.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AdminPage1Component,
    AdminPage2Component,
    AdminLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports: [
    AdminPage1Component,
    AdminPage2Component,
    AdminLayoutComponent,
  ]
})
export class AdminModule { }

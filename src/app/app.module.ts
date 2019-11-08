import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientPage1Component } from './clientPage1/clientPage1.component';
import { ClientPage2Component } from './clientPage2/clientPage2.component';
// import { AdminPage1Component } from './admin/admin-page1/admin-page1.component';
// import { AdminPage2Component } from './admin/admin-page2/admin-page2.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    ClientPage1Component,
    ClientPage2Component,
    // AdminPage1Component,
    // AdminPage2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

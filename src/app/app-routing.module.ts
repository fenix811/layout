import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientLayoutComponent} from './client-layout/client-layout.component';
import { ClientPage1Component } from './clientPage1/clientPage1.component';
import { ClientPage2Component } from './clientPage2/clientPage2.component';
// import { AdminPage1Component } from './admin/admin-page1/admin-page1.component';
// import { AdminPage2Component } from './admin/admin-page2/admin-page2.component';
 import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent,
    children :[
      { path: 'page1', component: ClientPage1Component},
      { path: 'page2', component: ClientPage2Component},
  ]
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }

//   {
//   path: 'admin', component: AdminLayoutComponent,
//   children :[
//     { path: 'adminpage1', component: AdminPage1Component},
//     { path: 'adminpage2', component: AdminPage2Component},
// ]}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

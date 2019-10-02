import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard.component';

const ROUTES: Routes = [
  { path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [

  ],
  exports: [

  ]
})
export class DashboardModule {

}
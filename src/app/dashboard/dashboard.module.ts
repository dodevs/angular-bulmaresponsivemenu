import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard.component';

const ROUTES: Routes = [
  { path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [

  ]
})
export class DashboardModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './core/pages/layout/layout.component';

import { CoreModule } from './core/core.module';

const ROUTES: Routes = [
  { path: '', component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'index', pathMatch: 'full'},
        { path: 'index', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      ]
  },
  { path: '*', redirectTo: ''}
]

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    CoreModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

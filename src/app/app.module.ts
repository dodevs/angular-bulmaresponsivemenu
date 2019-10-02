import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './core/pages/layout/layout.component';

import { CoreModule } from './core/core.module';

const ROUTES: Routes = [
  {
    path: '/', component: LayoutComponent, children: [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
    ]
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, CoreModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

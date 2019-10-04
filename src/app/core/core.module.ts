import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    AsideComponent,
    FooterComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule {

}
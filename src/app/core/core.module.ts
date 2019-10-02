import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule {

}
import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';

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
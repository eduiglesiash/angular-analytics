import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CardMobileComponent} from './card-mobile/card-mobile.component';
import {PipesModule} from '../pipes/pipes.module';
import { AccordionComponent } from './accordion/accordion.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardMobileComponent,
    AccordionComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PipesModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardMobileComponent,
    AccordionComponent]
})
export class SharedModule {
}

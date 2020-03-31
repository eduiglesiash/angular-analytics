import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileDetailComponent } from './views/mobile-detail/mobile-detail.component';
import { MobileCatalogComponent } from './views/mobile-catalog/mobile-catalog.component';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MobileDetailComponent,
    MobileCatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

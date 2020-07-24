import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileDetailComponent } from './views/mobile-detail/mobile-detail.component';
import { MobileCatalogComponent } from './views/mobile-catalog/mobile-catalog.component';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import {HttpClientModule} from '@angular/common/http';
import { Page404Component } from './views/page404/page404.component';
import {Mva10DslAngularModule} from '@vodafone-es/reboot-dsl-mva10-angular';
import { TestComponentsComponent } from './views/test-components/test-components.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileDetailComponent,
    MobileCatalogComponent,
    Page404Component,
    TestComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PipesModule,
    Mva10DslAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MobileDetailComponent} from './views/mobile-detail/mobile-detail.component';
import {MobileCatalogComponent} from './views/mobile-catalog/mobile-catalog.component';
import {Page404Component} from './views/page404/page404.component';
import {TestComponentsComponent} from './views/test-components/test-components.component';


const routes: Routes = [
  {
    path: 'catalog',
    component: MobileCatalogComponent
  },
  {
    path: 'test-components',
    component: TestComponentsComponent
  },
  {
    path: 'mobile/:name/:id',
    component: MobileDetailComponent
  },
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MobileDetailComponent} from './views/mobile-detail/mobile-detail.component';
import {MobileCatalogComponent} from './views/mobile-catalog/mobile-catalog.component';


const routes: Routes = [
  {
    path: '',
    component: MobileCatalogComponent
  },
  {
    path: 'mobile-detail',
    component: MobileDetailComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

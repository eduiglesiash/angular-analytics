import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteVodafonePipe } from './site-vodafone/site-vodafone.pipe';



@NgModule({
  declarations: [SiteVodafonePipe],
  imports: [
    CommonModule
  ],
  exports: [SiteVodafonePipe],
})
export class PipesModule { }

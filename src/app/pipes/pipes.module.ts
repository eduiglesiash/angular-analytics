import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteVodafonePipe } from './site-vodafone/site-vodafone.pipe';
import { NameUrlPipe } from './name-url/name-url.pipe';



@NgModule({
  declarations: [SiteVodafonePipe, NameUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [SiteVodafonePipe, NameUrlPipe],
})
export class PipesModule { }

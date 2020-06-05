import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siteVodafone'
})
export class SiteVodafonePipe implements PipeTransform {

  private URLVODAFONE = 'https://www.vodafone.es';
  transform(url: string): string {
    return `${this.URLVODAFONE}${url}`;
  }

}

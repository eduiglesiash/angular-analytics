import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameUrl'
})
export class NameUrlPipe implements PipeTransform {

  transform(name: string): string {
    return name.toLowerCase().replace(/ /g , '-');
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(value:string|undefined): string  {
    return `Name: <b>${value} </b>`;
  }

}

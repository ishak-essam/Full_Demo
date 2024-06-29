import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.length > args[0]? value.substr(0, args[0]) : value;
  }
}

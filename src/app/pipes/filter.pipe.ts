import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length == 0 || !filterString) return value;
    else {
      const filterArr = [];
      for (const server of value) {
        // if (server[propName] == filterString) {
        if (server[propName].includes(filterString)) {
          filterArr.push(server);
        }
      }
      return filterArr;
    }
  }
}

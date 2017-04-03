import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upvoteSorter'
})
export class UpvoteSorterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

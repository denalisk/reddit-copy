import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'upvoteSorter',
  pure: false
})
export class UpvoteSorterPipe implements PipeTransform {

  transform(input: Post[], desiredView) {
    var output: Post[] = [];

    if (desiredView === "positive") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].upvotes > -1)
        output.push(input[i]);
      }
    } else if (desiredView === "negative") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].upvotes < 0)
        output.push(input[i]);
      }
    } else {
      output = input.slice()
    };

    for(let index = 0; index < output.length - 1; index++) {
      for(let jdex = 0; jdex < output.length - (index + 1); jdex++) {
        if (output[jdex].upvotes < output[jdex + 1].upvotes) {
          let holder = output[jdex];
          output[jdex] = output[jdex + 1];
          output[jdex + 1] = holder;
        }
      }
    }

    return output;
  }
}

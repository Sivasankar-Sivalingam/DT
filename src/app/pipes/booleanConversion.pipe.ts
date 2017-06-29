import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'booleanConversion'})
export class BooleanConversionPipe implements PipeTransform {
  transform(status: boolean): string {
    if(status){
        return 'Y';
    }else{
      return 'N';
    }
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultado=[];
    for(const car of value) {
      if(car.plate.toLowerCase().indexOf(arg)>-1 ){
        resultado.push(car);
      };

    };



    return resultado;


  }





}

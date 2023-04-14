import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultado=[];
    for(const persona of value) {
      if(persona.id.toLowerCase().indexOf(arg)>-1 ){
        resultado.push(persona);
      };
    
    };
    


    return resultado;

    
  }





}

import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'filtro'})

export class FilotroPipe implements PipeTransform {

transform(arreglo:any[],texto:string=''):any[]{

    console.log(arreglo,texto)

    if(texto===''){

        return arreglo
    }
    if(!arreglo){
        return arreglo
        
    }
    texto=texto.toLocaleLowerCase();
    return arreglo.filter(item => item.name.toLowerCase().includes(texto))
    
  
}

}

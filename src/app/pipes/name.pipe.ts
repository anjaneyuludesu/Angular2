import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'mypipe'

})
export class NamePipe implements PipeTransform{
    transform(value: string, ...args: string[]):string {
        args.forEach(x=>{
value=value+x;
        });
      return value;
    }

}
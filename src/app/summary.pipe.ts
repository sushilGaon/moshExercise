
import {Pipe, PipeTransform} from '@angular/core'
import { pipe } from 'rxjs';


@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform{
    transform(value:any, limit?:any){
        console.log(typeof(limit))
        if(!value)
            return null;

        let actualLimit  = limit ? limit : 50;
        if(limit && typeof(limit) !== 'number'){
            alert('limit should be specified as integer')
            return null;
        }else{
            return value.substring(0,actualLimit)+"...";
        }
    }
}
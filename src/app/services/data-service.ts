import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AppErrors } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';

/*@Injectable({
  providedIn: 'root'
})*/
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

   getAll(){
      return this.http.get(this.url)
        .pipe(map(response => response as []))
        .pipe(catchError(this.handleError))
   }
   create(resource){
    //return throwError(new AppErrors());
    return this.http.post(this.url, JSON.stringify(resource))
        .pipe(map(response => response))
        .pipe(catchError(this.handleError))
   }
  update(resource){
    return this.http.put(this.url+"/"+resource.id,resource)
        .pipe(map(response => response))
        .pipe(catchError(this.handleError))
  }
  delete(id){
    return throwError(new AppErrors());
    /*return this.http.delete(this.url+"/"+id)
        .pipe(map(response => response))
        .pipe(catchError(this.handleError))*/
  }

  private handleError(error:Response){
    if(error.status == 404)
      return throwError(new NotFoundError())
    else
      return throwError(new AppErrors(error))
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { Archivo } from '../model/archivo';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  private baseURL = 'http://localhost:8080/';

constructor(private httpClient : HttpClient) { }

private _refresh$ = new Subject<void>();

get refresh$(){
  return this._refresh$
}

getArchivoList():Observable<Archivo[]>{
  return this.httpClient.get<Archivo[]>(`${this.baseURL}${'get_all_document'}`);
}

ArchivoRegister(archivo: Archivo): Observable<Object> {
  return this.httpClient.post(`${this.baseURL}${'save_document'}`, archivo)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
}

ArchivoUpdate(id:string, archivo: Archivo):Observable<Object>{

  return this.httpClient.put(`${this.baseURL}${'update_document'}`,archivo, {
    params: {id},
  });
}

getArchivo(id:string):Observable<Archivo>{
  return this.httpClient.get<Archivo>(`${this.baseURL}${'get_document'}/${id}`);
}

ArchivoDelete(id:string):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}${'delete_document'}/${id}`);
}


}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseURL = 'http://localhost:8080/cliente/clientes';


  constructor(private httpClient : HttpClient) { }

  obtenerListaDeClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL} `);
  }

  registrarCliente(cliente:Cliente):Observable<Object>{
    return this.httpClient.post(`${this.baseURL} `,cliente);

  }

  actualizarCliente(cliente:Cliente):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${cliente.id}`,cliente);
  }

  obtenerCliente(id:string):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }  

  eliminarCliente(id:string):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}

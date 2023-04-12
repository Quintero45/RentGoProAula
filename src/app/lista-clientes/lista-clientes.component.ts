import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
 
  
  clientes:Cliente[];

  constructor(private clienteServicio : ClienteService , private router:Router , private route:ActivatedRoute) {}
  filterUser=''


  ngOnInit(): void {
    this.obtenerClientes();
  }
  


  actualizarCliente(cliente:Cliente){
    this.router.navigate(['/actualizar-cliente',cliente]);
  }

  eliminarCliente(id: string){
    if(confirm(" ¿Estas seguro de eliminar al cliente ?")){
      this.clienteServicio.eliminarCliente(id).subscribe(dato =>{
        console.log(dato);
        this.obtenerClientes();
      })
    }
    
  }

  private obtenerClientes(){
    this.clienteServicio.obtenerListaDeClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }



}

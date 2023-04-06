import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-cliente',
  templateUrl: './registar-cliente.component.html',
  styleUrls: ['./registar-cliente.component.css']
})

export class RegistarClienteComponent implements OnInit{

  cliente: Cliente = new Cliente();
  constructor(private clienteServicio:ClienteService, private router:Router){}

  ngOnInit(): void {

  }

  actualizarCliente(){
    this.clienteServicio.registrarCliente(this.cliente).subscribe( dato =>{
      console.log(dato);
      this.irAlaListaDeClientes();
    }, error => console.log(error));
  }

  irAlaListaDeClientes(){
    this.router.navigate(['/cliente/all']);

  }


  onSubmit(){
    this.actualizarCliente();
  }

  


  


}

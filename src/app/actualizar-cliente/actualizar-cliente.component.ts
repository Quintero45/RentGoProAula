import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit{

  id:string;
  cliente: Cliente = new Cliente();
  constructor(private clienteService:ClienteService , private router:Router,private route:ActivatedRoute){}


  ngOnInit(): void {
    this.id =  this.route.snapshot.params['id'];
    this.clienteService.obtenerCliente(this.id).subscribe(dato =>{
      this.cliente = dato;
    },error => console.log(error));
  }




  irAlaListaDeClientes(){
    this.router.navigate(['/cliente/all']);
  }



  onSubmit(){
    this.clienteService.actualizarCliente(this.cliente).subscribe(dato => {
      this.irAlaListaDeClientes();
    })
  }




}

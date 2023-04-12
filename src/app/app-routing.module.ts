import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RegistarClienteComponent } from './registar-cliente/registar-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';


const routes: Routes = [
  {path : 'cliente/all',
   component:ListaClientesComponent},
  {path : '',
   redirectTo:'cliente/all',
   pathMatch:'full'},
  {path: 'registar-cliente' , component: RegistarClienteComponent},
  {path: 'actualizar-cliente', component: ActualizarClienteComponent},
  {path: 'lista-productos' , component: ListaProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

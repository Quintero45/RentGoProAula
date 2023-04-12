import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegistarClienteComponent } from './registar-cliente/registar-cliente.component';
import { FormsModule } from '@angular/forms';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { FilterPipe } from './filter.pipe';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ClienteService } from './cliente.service';
import { MyInterceptorService } from './my-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    RegistarClienteComponent,
    ActualizarClienteComponent,
    FilterPipe,
    ListaProductosComponent,
    RegistrarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    ClienteService,
    {

      provide: HTTP_INTERCEPTORS,
      useClass:MyInterceptorService,
      multi: true

    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

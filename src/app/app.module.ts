import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { CarListComponent } from './components/crud-car/car-list/car-list.component';
import { CarRegisterComponent } from './components/crud-car/car-register/car-register.component';
import { CarUpdateComponent } from './components/crud-car/car-update/car-update.component';
import { CommonModule } from '@angular/common';
import { ArchivosHomeComponent } from './components/crud-archivos/archivos-home/archivos-home.component';
import { ArchivoUpdateComponent } from './components/crud-archivos/archivo-update/archivo-update.component';





@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    CarListComponent,
    CarRegisterComponent,
    CarUpdateComponent,
    ArchivosHomeComponent,
    ArchivoUpdateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarRegisterComponent } from './components/car-register/car-register.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';




@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    CarListComponent,
    CarRegisterComponent,
      CarUpdateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/crud-car/car-list/car-list.component';
import { CarRegisterComponent } from './components/crud-car/car-register/car-register.component';
import { CarUpdateComponent } from './components/crud-car/car-update/car-update.component';
import { ArchivosHomeComponent } from './components/crud-archivos/archivos-home/archivos-home.component';
import { ArchivoUpdateComponent } from './components/crud-archivos/archivo-update/archivo-update.component';



const routes: Routes = [
  {path : 'all/cars',
   component:CarListComponent},
  {path : '',
   redirectTo:'all/cars',
   pathMatch:'full'},
  {path: 'car/register' , component: CarRegisterComponent},
  {path: 'car/update' , component: CarUpdateComponent},
  {path: 'car/document' , component: ArchivosHomeComponent},
  {path: 'car/document/update' , component: ArchivoUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

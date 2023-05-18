import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarRegisterComponent } from './components/car-register/car-register.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';



const routes: Routes = [
  {path : 'all/cars',
   component:CarListComponent},
  {path : '',
   redirectTo:'all/cars',
   pathMatch:'full'},
  {path: 'car/register' , component: CarRegisterComponent},
  {path: 'car/update' , component: CarUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

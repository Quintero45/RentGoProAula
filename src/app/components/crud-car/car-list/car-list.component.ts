import { Component, OnInit } from '@angular/core';
import { Car } from '../../../model/car';
import { CarService } from '../../../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars:Car[];

  constructor(private carServicio : CarService , private router:Router , private route:ActivatedRoute) { }
  filterCar=''

  ngOnInit(): void {
    this.getCars();
  }

  CarUpdate(car:Car){
    this.router.navigate(['car/update',car]);
  }

  CarDelete(plate: string){
    if(confirm(" ¿Estas seguro de eliminar este Vehiculo ?")){
      this.carServicio.CarDelete(plate).subscribe(dato =>{
        console.log(dato);
        this.getCars();
      })
    }

  }

  private getCars(){
    this.carServicio.getCarList().subscribe(dato => {
      this.cars = dato;
    });
  }

}

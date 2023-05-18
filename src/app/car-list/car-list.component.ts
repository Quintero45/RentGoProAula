import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
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
  /*
  swal
  CarRegister(plate: string){
      swal({
        title: "¿Estas seguro?",
        text:"Confirma si deseas guardar el vehiculo",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, guardar',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        this.carServicio.CarRegister(plate).subscribe(dato => {
          console.log(dato);
          this.getCars();
          swal(
            'Carro guardado',
            'El carro ha sido guardado con exito',
            'success'
          )
    })

    }
  }*/
}

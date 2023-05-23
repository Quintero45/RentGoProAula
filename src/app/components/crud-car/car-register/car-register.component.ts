import { Component, OnInit } from '@angular/core';
import { Car } from '../../../model/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.css']
})
export class CarRegisterComponent implements OnInit {

  plate:string;
  car: Car = new Car();
  constructor(private carServicio:CarService , private router:Router){}

  ngOnInit(): void {

  }


  carRegister(){
    this.carServicio.CarRegister(this.car).subscribe( dato =>{
      console.log(dato);
      this.goToCarList();
    });
  }



  goToCarList(){
    this.router.navigate(['all/cars']);
  }


  onSubmit(){
    this.carRegister();
    this.goToCarList();
  }


}


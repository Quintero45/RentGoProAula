import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit{

  plate:string;
  car: Car = new Car();
  constructor(private carServicio:CarService , private router:Router,private route:ActivatedRoute){}


  ngOnInit(): void {
    this.plate =  this.route.snapshot.params['plate'];
    this.carServicio.GetCar(this.plate).subscribe(dato =>{
      this.car = dato;
    },error => console.log(error));
  }




  goToCarList(){
    this.router.navigate(['all/cars']);
  }



  onSubmit(){
    this.carServicio.CarUpdate(this.car).subscribe(dato => {
      this.goToCarList();
    })
  }




}

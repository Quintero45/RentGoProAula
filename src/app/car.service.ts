import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseURL = 'http://localhost:8082/';

constructor(private httpClient : HttpClient) { }

getCarList():Observable<Car[]>{
  return this.httpClient.get<Car[]>(`${this.baseURL}${'get_all_car'}`);

}

CarRegister(car:Car):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}${'save_car'}`,car);
}

CarUpdate(car:Car):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${'update_car'}`,car);
}

GetCar(plate:string):Observable<Car>{
  return this.httpClient.get<Car>(`${this.baseURL}/${plate}`);
}

CarDelete(plate:string):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${plate}`);
}


}

import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Car } from '../../services/car';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cars',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
 
})
export class Cars  {

  selectedBrand = 'All';
  selectedPrice = 'All';

  // cars: any[] = [];
  // filteredCars: any[] = [];

  readonly carsService = inject(Car)

  cars = toSignal(this.carsService.getCars(), {
    initialValue:[]
  })

  // ngOnInit() {
  //   this.carService.getCars().subscribe((data: any) => {
  //     this.cars = data;
  //     this.filteredCars = data;
  //   });
  // }

  applyFilters() {


  }

}
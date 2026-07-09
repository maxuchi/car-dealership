import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

import { Car } from '../../services/car';

@Component({
  selector: 'app-cars',
  imports: [
    RouterLink,
    CommonModule,
    FormsModule
  ],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars {

  private readonly carsService = inject(Car);

  readonly selectedBrand = signal('All');
  readonly selectedPrice = signal('All');

  readonly cars = toSignal(
    this.carsService.getCars(),
    {
      initialValue: []
    }
  );

  readonly filteredCars = computed(() => {

    const cars = this.cars();

    const selectedBrand = this.selectedBrand();

    const selectedPrice = this.selectedPrice();

    return cars.filter((car: any) => {

      // BRAND FILTER

      const brandMatch =
        selectedBrand === 'All' ||
        car.name
          ?.toLowerCase()
          .includes(selectedBrand.toLowerCase());


      // PRICE FILTER

      const carPrice = Number(car.price);

      let priceMatch = true;

      if (selectedPrice === 'Under') {
        priceMatch = carPrice < 100000;
      }

      if (selectedPrice === 'Over') {
        priceMatch = carPrice >= 100000;
      }


      // BOTH FILTERS MUST MATCH

      return brandMatch && priceMatch;

    });

  });

}
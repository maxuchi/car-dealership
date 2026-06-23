import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Car } from '../../services/car';

@Component({
  selector: 'app-cars',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars implements OnInit {

  selectedBrand = 'All';
  selectedPrice = 'All';

  cars: any[] = [];
  filteredCars: any[] = [];

  constructor(private carService: Car) {}

  ngOnInit() {
    this.carService.getCars().subscribe((data: any) => {
      this.cars = data;
      this.filteredCars = data;
    });
  }

  applyFilters() {

    this.filteredCars = this.cars.filter(car => {

      const brandMatch =
        this.selectedBrand === 'All' ||
        car.name.includes(this.selectedBrand);

      const priceMatch =
        this.selectedPrice === 'All' ||
        (this.selectedPrice === 'Under' && car.price < 100000) ||
        (this.selectedPrice === 'Over' && car.price >= 100000);

      return brandMatch && priceMatch;

    });

  }

}
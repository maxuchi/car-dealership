import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Car } from '../../services/car';

@Component({
  selector: 'app-cars',
  imports: [RouterLink, CommonModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars implements OnInit {

  selectedBrand = 'All';
  selectedPrice = 'All';

  cars: any[] = [];

  constructor(private carService: Car) {}

  ngOnInit() {
    this.carService.getCars().subscribe((data: any) => {
      this.cars = data;
      console.log(this.cars);
    });
  }
}
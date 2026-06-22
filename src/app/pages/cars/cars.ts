import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cars',
  imports: [RouterLink, CommonModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars {

  selectedBrand = 'All';
  selectedPrice = 'All';

  cars = [
    {
      id: '1',
      name: 'BMW M4 Competition',
      price: 84900,
      image: '/images/bmw-m4.jpg'
    },
    {
      id: '2',
      name: 'Audi RS7 Sportback',
      price: 129900,
      image: '/images/audi-rs7.jpg'
    },
    {
      id: '3',
      name: 'Mercedes-AMG GT 63',
      price: 149900,
      image: '/images/mercedes-amg.jpg'
    }
  ];
}
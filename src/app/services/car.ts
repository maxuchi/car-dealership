import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Car {

  private cars = [
    {
      id: '1',
      name: 'BMW M4 Competition',
      price: 85000,
      image: '/images/bmw-m4.jpg',
      description: 'High-performance sports coupe.',
      engine: '3.0L Twin Turbo',
      power: '503 HP',
      transmission: 'Automatic',
      mileage: '15000 km',
      color: 'Black',
      year: 2023,
      drivetrain: 'RWD'
    },
    {
      id: '2',
      name: 'Audi RS7',
      price: 95000,
      image: '/images/audi-rs7.jpg',
      description: 'Luxury sportback with extreme performance.',
      engine: '4.0L V8 Twin Turbo',
      power: '591 HP',
      transmission: 'Automatic',
      mileage: '12000 km',
      color: 'Gray',
      year: 2023,
      drivetrain: 'AWD'
    },
    {
      id: '3',
      name: 'Mercedes AMG GT',
      price: 110000,
      image: '/images/mercedes-amg.jpg',
      description: 'Premium German sports car.',
      engine: '4.0L V8 Biturbo',
      power: '577 HP',
      transmission: 'Automatic',
      mileage: '9000 km',
      color: 'White',
      year: 2024,
      drivetrain: 'RWD'
    }
  ];

  getCars() {
    return of(this.cars);
  }

  getCarById(id: string) {
    const car = this.cars.find(c => c.id === id);
    return of(car);
  }
}
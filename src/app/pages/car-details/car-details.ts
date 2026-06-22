import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  imports: [],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails {
cars = [
  {
    id: '1',
    name: 'BMW M4 Competition',
    price: '$84,900',
    image: '/images/bmw-m4.jpg',
    year: 2024,
    mileage: '12,500 km',
    engine: '3.0L Twin-Turbo Inline-6',
    power: '503 HP',
    transmission: '8-Speed Automatic',
    drivetrain: 'AWD',
    color: 'Alpine White',
    description: 'High-performance sports coupe with aggressive styling, advanced technology, and exceptional driving dynamics.'
  },
  {
    id: '2',
    name: 'Audi RS7 Sportback',
    price: '$129,900',
    image: '/images/audi-rs7.jpg',
    year: 2024,
    mileage: '9,800 km',
    engine: '4.0L Twin-Turbo V8',
    power: '621 HP',
    transmission: '8-Speed Tiptronic Automatic',
    drivetrain: 'Quattro AWD',
    color: 'Nardo Grey',
    description: 'Luxury performance sportback combining supercar-level performance with premium comfort and practicality.'
  },
  {
    id: '3',
    name: 'Mercedes-AMG GT 63',
    price: '$149,900',
    image: '/images/mercedes-amg.jpg',
    year: 2024,
    mileage: '7,200 km',
    engine: '4.0L Twin-Turbo V8',
    power: '577 HP',
    transmission: 'AMG Speedshift Automatic',
    drivetrain: '4MATIC+ AWD',
    color: 'Obsidian Black',
    description: 'Premium grand tourer delivering luxury, speed, and cutting-edge AMG performance engineering.'
  }
];
  carId: string | null = '';
  selectedCar: any;
  constructor(private route: ActivatedRoute) {
    this.carId = this.route.snapshot.paramMap.get('id');
   this.selectedCar = this.cars.find(
  car => car.id === this.carId
);
    console.log('Car ID:', this.carId);
  }

}

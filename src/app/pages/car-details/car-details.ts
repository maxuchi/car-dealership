import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../services/car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-details',
  imports: [CommonModule],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails implements OnInit {

  selectedCar: any;

  constructor(
    private route: ActivatedRoute,
    private carService: Car
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.carService.getCarById(id).subscribe((data: any) => {
        console.log('ID =', id);
        console.log('DATA =', data);

        this.selectedCar = data;
      });
    }
  }

  contactDealer() {
    alert('Thank you for your interest! Our dealer will contact you soon.');
  }
}
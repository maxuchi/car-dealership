import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Car } from '../../services/car';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails implements OnInit {

 selectedCar = signal<any>(null);
  imageOpen = false;

  constructor(
    private route: ActivatedRoute,
    private carService: Car
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.carService.getCarById(id).subscribe((data: any) => {
        this.selectedCar.set(data);
        console.log(id);
      });
    }
  }

  openImage(): void {
    this.imageOpen = true;
  }

  closeImage(): void {
    this.imageOpen = false;
  }

  contactDealer(): void {
    alert('Thank you for your interest! Our dealer will contact you soon.');
  }

}
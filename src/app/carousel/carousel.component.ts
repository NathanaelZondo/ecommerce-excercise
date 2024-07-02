import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  imageUrls = [
    '../../assets/pexels-daiangan-102127.jpg"',
    '../../assets/pexels-daiangan-102127.jpg"',
    '../../assets/pexels-daiangan-102127.jpg"',
    '../../assets/pexels-daiangan-102127.jpg"',
  ];
  carouselIsHidden = false;

  hideCarousel() {
    console.log('hideCarousel');
    this.carouselIsHidden = true;
  }
}

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [IonicModule, CartComponent, CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  open = false;
  openpopup() {
    console.log('openpopup');
    this.open = !this.open;
  }
}

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CartbuttonComponent } from '../cartbutton/cartbutton.component';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [IonicModule, CartbuttonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}

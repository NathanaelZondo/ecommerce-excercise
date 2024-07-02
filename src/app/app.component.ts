import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfosectionComponent } from './infosection/infosection.component';
import { SortingfilterComponent } from './sortingfilter/sortingfilter.component';
import { CategoryfilterComponent } from './categoryfilter/categoryfilter.component';
import { PricerangefilterComponent } from './pricerangefilter/pricerangefilter.component';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component';
import { CartbuttonComponent } from './cartbutton/cartbutton.component';
import { FilterpopupComponent } from './filterpopup/filterpopup.component';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CartbuttonComponent,
    CommonModule,
    RouterOutlet,
    TopbarComponent,
    IonicModule,
    HeaderComponent,
    CarouselComponent,
    InfosectionComponent,
    SortingfilterComponent,
    CategoryfilterComponent,
    PricerangefilterComponent,
    DisplayproductsComponent,
    FilterpopupComponent,
    PaginationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
}

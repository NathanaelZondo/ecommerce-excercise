import { Component, OnInit } from '@angular/core';
import { CategoryfilterComponent } from '../categoryfilter/categoryfilter.component';
import { PricerangefilterComponent } from '../pricerangefilter/pricerangefilter.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-filterpopup',
  templateUrl: './filterpopup.component.html',
  styleUrls: ['./filterpopup.component.scss'],
  standalone: true,
  imports: [
    FilterpopupComponent,
    CategoryfilterComponent,
    PricerangefilterComponent,
    IonicModule,
  ],
})
export class FilterpopupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

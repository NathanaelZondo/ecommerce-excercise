import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { JsonPipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-displayproducts',
  standalone: true,
  imports: [
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
  ],
  templateUrl: './displayproducts.component.html',
  styleUrl: './displayproducts.component.scss',
})
export class DisplayproductsComponent {}

import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cartbutton',
  templateUrl: './cartbutton.component.html',
  styleUrls: ['./cartbutton.component.scss'],
  standalone: true,
  imports: [CartbuttonComponent, IonicModule],
})
export class CartbuttonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

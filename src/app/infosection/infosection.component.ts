import { Component, OnInit } from '@angular/core';
import { DescriptionComponent } from '../description/description.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';

@Component({
  selector: 'app-infosection',
  templateUrl: './infosection.component.html',
  styleUrls: ['./infosection.component.scss'],
  standalone: true,
  imports: [DescriptionComponent, RecommendationsComponent],
})
export class InfosectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, NgbDropdownModule, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'angular-tour';

  // Define cities array
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  // Variable to hold the selected city
  selectedCity: any;
}

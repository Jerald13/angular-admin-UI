import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgbNavModule, NgbDropdownModule], // Ensure BsDropdownModule is imported
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Correct the key to 'styleUrls'
})
export class HeaderComponent {
  constructor() {
    console.log('HeaderComponent initialized');
  }
}

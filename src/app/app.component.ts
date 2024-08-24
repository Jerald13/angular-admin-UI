import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpecialComponent } from './special/special.component';
import { NormalComponent } from './normal/normal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NormalComponent, SpecialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tour';
}

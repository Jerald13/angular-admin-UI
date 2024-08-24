import { Component } from '@angular/core';
import { AnotherComponent } from "../another/another.component";

@Component({
  selector: 'app-special',
  standalone: true,
  imports: [AnotherComponent],
  templateUrl: './special.component.html',
  styleUrl: './special.component.scss',
})
export class SpecialComponent {}

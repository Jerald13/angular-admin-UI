import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-procurement',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent, MatIconModule, CommonModule], // Include CommonModule here
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.scss'], // Corrected key name from 'styleUrl' to 'styleUrls'
})
export class ProcurementComponent {
  isSidebarVisibleOnMobile: boolean = false; // Control sidebar visibility on mobile
  toggleSidebar(): void {
    this.isSidebarVisibleOnMobile = !this.isSidebarVisibleOnMobile; // Toggle sidebar visibility on mobile
  }
}

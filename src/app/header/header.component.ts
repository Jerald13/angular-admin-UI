import { Component, ElementRef, HostListener } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgbNavModule,
    NgbDropdownModule,
    RouterLink,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHamburgerVisible: boolean = true; // Set initial visibility to true
  isSidebarVisible: boolean = false; // Boolean to control sidebar visibility

  constructor(private eRef: ElementRef) {}

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle sidebar visibility
  }

  toggleHamburger() {
    this.isHamburgerVisible = !this.isHamburgerVisible; // Toggle hamburger menu visibility
  }

  // Listener to detect clicks outside the sidebar
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (
      this.isSidebarVisible &&
      targetElement &&
      !this.eRef.nativeElement.contains(targetElement) &&
      !targetElement.classList.contains('navbar-toggler')
    ) {
      this.isSidebarVisible = false; // Close sidebar if click is outside
    }
  }
}

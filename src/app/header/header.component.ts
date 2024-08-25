import { Component, ElementRef, HostListener } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
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
  isHamburgerVisible: boolean = true;   isSidebarVisible: boolean = false; 
  constructor(private eRef: ElementRef) {}

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;   }

  toggleHamburger() {
    this.isHamburgerVisible = !this.isHamburgerVisible;   }

    @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (
      this.isSidebarVisible &&
      targetElement &&
      !this.eRef.nativeElement.contains(targetElement) &&
      !targetElement.classList.contains('navbar-toggler')
    ) {
      this.isSidebarVisible = false;     }
  }
}

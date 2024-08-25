import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent, MatIconModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  isSidebarVisibleOnMobile: boolean = false; // Control mobile sidebar visibility
  isSidebarVisibleOnPC: boolean = false; // Control PC sidebar visibility

  @ViewChild('sidebarContainerMobile') sidebarContainerMobileRef!: ElementRef;
  @ViewChild('mobileHamburgerButton') mobileHamburgerButtonRef!: ElementRef;
  @ViewChild('pcHamburgerButton') pcHamburgerButtonRef!: ElementRef;

  constructor(private eRef: ElementRef) {}

  ngAfterViewInit(): void {
    // Check that ViewChild references are available
    if (
      !this.sidebarContainerMobileRef ||
      !this.mobileHamburgerButtonRef ||
      !this.pcHamburgerButtonRef
    ) {
      console.error('ViewChild elements not found');
    }
  }

  // Toggle sidebar visibility for mobile
  toggleSidebar() {
    this.isSidebarVisibleOnMobile = !this.isSidebarVisibleOnMobile;
  }

  // Toggle sidebar visibility for PC
  toggleSidebarPC() {
    this.isSidebarVisibleOnPC = !this.isSidebarVisibleOnPC;
  }

  // Listener to detect clicks outside the sidebar
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const targetElement = event.target as HTMLElement;

    // Ensure ViewChild elements are defined
    if (
      !this.sidebarContainerMobileRef ||
      !this.mobileHamburgerButtonRef ||
      !this.pcHamburgerButtonRef
    ) {
      return; // Exit if ViewChild elements are not found
    }

    const sidebarElement = this.sidebarContainerMobileRef
      .nativeElement as HTMLElement;
    const mobileHamburgerElement = this.mobileHamburgerButtonRef
      .nativeElement as HTMLElement;
    const pcHamburgerElement = this.pcHamburgerButtonRef
      .nativeElement as HTMLElement;

    // Check if the clicked target is outside the sidebar element and both hamburger buttons
    if (
      (this.isSidebarVisibleOnMobile || this.isSidebarVisibleOnPC) && // Check if any sidebar is currently visible
      targetElement && // Ensure targetElement is defined
      sidebarElement && // Ensure sidebarElement is defined
      !sidebarElement.contains(targetElement) && // Check if the click is outside the sidebar
      !mobileHamburgerElement.contains(targetElement) && // Check if the click is not on the mobile button
      !pcHamburgerElement.contains(targetElement) // Check if the click is not on the PC button
    ) {
      this.isSidebarVisibleOnMobile = false; // Close mobile sidebar if click is outside
      this.isSidebarVisibleOnPC = false; // Close PC sidebar if click is outside
    }
  }

  onSidebarClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}

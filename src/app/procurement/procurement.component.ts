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
  selector: 'app-procurement',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent, MatIconModule, CommonModule],
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.scss'],
})
export class ProcurementComponent implements AfterViewInit {
  isSidebarVisibleOnMobile: boolean = false;   isSidebarVisibleOnPC: boolean = false;   isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  @ViewChild('sidebarContainerMobile') sidebarContainerMobileRef!: ElementRef;
  @ViewChild('mobileHamburgerButton') mobileHamburgerButtonRef!: ElementRef;
  @ViewChild('pcHamburgerButton') pcHamburgerButtonRef!: ElementRef;

  constructor(private eRef: ElementRef) {}

  ngAfterViewInit(): void {
        if (
      !this.sidebarContainerMobileRef ||
      !this.mobileHamburgerButtonRef ||
      !this.pcHamburgerButtonRef
    ) {
      console.error('ViewChild elements not found');
    }
  }

    toggleSidebar() {
    this.isSidebarVisibleOnMobile = !this.isSidebarVisibleOnMobile;
  }

    toggleSidebarPC() {
    this.isSidebarVisibleOnPC = !this.isSidebarVisibleOnPC;
  }

    @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const targetElement = event.target as HTMLElement;

        if (
      !this.sidebarContainerMobileRef ||
      !this.mobileHamburgerButtonRef ||
      !this.pcHamburgerButtonRef
    ) {
      return;     }

    const sidebarElement = this.sidebarContainerMobileRef
      .nativeElement as HTMLElement;
    const mobileHamburgerElement = this.mobileHamburgerButtonRef
      .nativeElement as HTMLElement;
    const pcHamburgerElement = this.pcHamburgerButtonRef
      .nativeElement as HTMLElement;

        if (
      (this.isSidebarVisibleOnMobile || this.isSidebarVisibleOnPC) &&       targetElement &&       sidebarElement &&       !sidebarElement.contains(targetElement) &&       !mobileHamburgerElement.contains(targetElement) &&       !pcHamburgerElement.contains(targetElement)     ) {
      this.isSidebarVisibleOnMobile = false;       this.isSidebarVisibleOnPC = false;     }
  }

  onSidebarClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}

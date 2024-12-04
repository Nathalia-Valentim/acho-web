import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navblue',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule ],
  templateUrl: './navblue.component.html',
  styleUrl: './navblue.component.css'
})

export class NavblueComponent {
  @Input() categoryName: string = '';
  @Input() categoryImage: string = '';

  currentScreenSize: string = 'desktop';  // Estado inicial
  sidebarOpen: boolean = false;
  searchActive: boolean = false;
  searchQuery: string = '';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
  }

  observeScreenSize() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // <= 480px
      Breakpoints.Small,  // <= 768px
      Breakpoints.Medium, // <= 1024px
      Breakpoints.Large,  // <= 1440px
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.currentScreenSize = 'mobile';
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.currentScreenSize = 'tablet';
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.currentScreenSize = 'desktop-medium';
        } else if (result.breakpoints[Breakpoints.Large]) {
          this.currentScreenSize = 'desktop-large';
        }
      }
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleSearch(): void {
    this.searchActive = !this.searchActive;
  }
}


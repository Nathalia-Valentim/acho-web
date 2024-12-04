import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent implements AfterViewInit{ 
  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.observeScreenSize();
  }

  categorias = [
    { nome: 'Esportes', icone: 'sports_soccer' },
    { nome: 'Artes Marciais', icone: 'sports_mma' },
    { nome: 'Gastronomia', icone: 'restaurant' },
    { nome: 'Natureza', icone: 'nature' },
    { nome: 'Intelectuais', icone: 'menu_book' },
    { nome: 'Artísticos', icone: 'palette' },
    { nome: 'Música', icone: 'music_note' },
    { nome: 'Bem-Estar', icone: 'favorite' },
    { nome: 'Manuais', icone: 'build' },
    { nome: 'Tecnologia', icone: 'computer' },
    { nome: 'Coleções', icone: 'collections' },
  ];

  irParaCategoria(nome: string): void {
    this.router.navigate(['/category', nome]);
  }

  currentScreenSize: string = 'desktop';

  observeScreenSize() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall, 
      Breakpoints.Small,  
      Breakpoints.Medium, 
      Breakpoints.Large,  
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

    this.breakpointObserver.observe(['(max-width: 1024px)']).subscribe(result => {
      this.showArrows = result.matches; 
    });
  }

  showArrows: boolean = false; 

  scrollCarrossel(direction: number): void {
    if (isPlatformBrowser(this.platformId)) {
    const container = document.querySelector('.categorias-container') as HTMLElement;
    if (container) {
      const scrollAmount = 150; 
      container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });

      
      setTimeout(() => this.updateArrowsVisibility(container), 300);
      }
    }
  }

  updateArrowsVisibility(container: HTMLElement): void {
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
    this.showLeftArrow = scrollLeft > 0; 
    this.showRightArrow = scrollLeft < maxScrollLeft; 
  }
  

  showLeftArrow: boolean = false; 
  showRightArrow: boolean = true; 
  
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    const container = document.querySelector('.categorias-container') as HTMLElement;
    if (container) {
      this.updateArrowsVisibility(container);
      container.addEventListener('scroll', () => this.updateArrowsVisibility(container));
      }
    }
  }
}
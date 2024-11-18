import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
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

  scrollEsquerda(): void {
    const container = document.querySelector('.categorias-container') as HTMLElement;
    container.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollDireita(): void {
    const container = document.querySelector('.categorias-container') as HTMLElement;
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }

  currentScreenSize: string = 'desktop';

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
}

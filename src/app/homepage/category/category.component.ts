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

    this.breakpointObserver.observe(['(max-width: 1024px)']).subscribe(result => {
      this.showArrows = result.matches; // Só ativa as setas se a tela for <= 1024px
    });
  }

  showArrows: boolean = false; // Define se as setas devem aparecer ou não

  scrollCarrossel(direction: number): void {
    const container = document.querySelector('.categorias-container') as HTMLElement;
    if (container) {
      const scrollAmount = 150; // Pixels para rolar
      container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });

      // Aguarde o scroll terminar e atualize as setas
      setTimeout(() => this.updateArrowsVisibility(container), 300);
    }
  }

  updateArrowsVisibility(container: HTMLElement): void {
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    this.showLeftArrow = scrollLeft > 0; // Mostra a seta esquerda se scrollLeft for maior que 0
    this.showRightArrow = scrollLeft < maxScrollLeft; // Mostra a seta direita se não estiver no fim
  }

  // Inicialização das variáveis
  showLeftArrow: boolean = false; // Seta esquerda está inicialmente escondida
  showRightArrow: boolean = true; // Seta direita aparece inicialmente

  ngAfterViewInit(): void {
    const container = document.querySelector('.categorias-container') as HTMLElement;
    if (container) {
      this.updateArrowsVisibility(container);

      // Monitora eventos de rolagem para atualizar setas
      container.addEventListener('scroll', () => this.updateArrowsVisibility(container));
    }
  }
}

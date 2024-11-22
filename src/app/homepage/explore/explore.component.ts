import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})

export class ExploreComponent {
  hobbies = [
    { name: 'Cerâmica', img: 'images/ceramica.png' },
    { name: 'Pintura', img: 'images/pintura.png' },
    { name: 'Música', img: 'images/musica.png' },
    { name: 'Leitura', img: 'images/leitura.png' },
    { name: 'Fotografia', img: 'images/fotografia.png' },
    { name: 'Desenho', img: 'images/desenho.png' },
    { name: 'Culinária', img: 'images/culinária.png' },
    { name: 'Crochê', img: 'images/crochê.png' },
  ];

  @ViewChild('carrossel', { static: false }) carrossel!: ElementRef;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  /* Método para começar o drag */
  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.carrossel.nativeElement.offsetLeft;
    this.scrollLeft = this.carrossel.nativeElement.scrollLeft;
    event.preventDefault(); // Impede comportamento padrão (como seleção de texto)
  }

  /* Método para arrastar o carrossel enquanto o mouse é movido */
  dragging(event: MouseEvent) {
    if (!this.isDragging) return;
    const x = event.pageX - this.carrossel.nativeElement.offsetLeft;
    const walk = (x - this.startX); // Distância movida pelo mouse
    this.carrossel.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  /* Método para parar o drag */
  stopDragging() {
    this.isDragging = false;
  }

  /* Método para mover o carrossel para a direita */
  moveNext() {
    this.carrossel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  currentScreenSize: string = 'desktop';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
  }

  /* Método para observar mudanças de tamanho da tela */
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
  }
}

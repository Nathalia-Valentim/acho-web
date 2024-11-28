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
    { name: 'Confeitaria', img: 'images/culinária.png' },
    { name: 'Crochê', img: 'images/crochê.png' },
    { name: 'Jardinagem', img: 'images/jardinagem.jpeg' },
    { name: 'Yoga', img: 'images/yoga.jpeg' },
    { name: 'Mixologia', img: 'images/mixologia.png' },
    { name: 'Escalada', img: 'images/escalada.jpeg' },
    { name: 'Colecionismo', img: 'images/coleções.jpeg' },
    { name: 'Pesca', img: 'images/pesca.jpeg' }

  ];

  @ViewChild('carrossel', { static: false }) carrossel!: ElementRef;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  carrosselMoved = false;

  
  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.carrossel.nativeElement.offsetLeft;
    this.scrollLeft = this.carrossel.nativeElement.scrollLeft;
    event.preventDefault(); 
  }

  
  dragging(event: MouseEvent) {
    if (!this.isDragging) return;
    const x = event.pageX - this.carrossel.nativeElement.offsetLeft;
    const walk = (x - this.startX); 
    this.carrossel.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

 
  stopDragging() {
    this.isDragging = false;
  }


  moveNext() {
    this.carrossel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    this.carrosselMoved = true;

    const header = document.querySelector('.explorar-header');
    if (header) {
      header.classList.add('moved');
    }
  }
  
  movePrev() {
    this.carrossel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  const header = document.querySelector('.explorar-header');
  if (header && this.carrossel.nativeElement.scrollLeft <= 0) {
    header.classList.remove('moved'); 
    this.carrosselMoved = false; 
  }
  }

  isSetaEsquerdaVisible(): boolean {
    return this.carrosselMoved;
  }


  currentScreenSize: string = 'desktop';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
  }


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
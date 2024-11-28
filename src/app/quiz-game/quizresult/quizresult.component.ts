import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface Hobby {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-quizresult',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule],
  templateUrl: './quizresult.component.html',
  styleUrl: './quizresult.component.css'
})

export class QuizresultComponent {
  hobbies: Hobby[] = [
    {
      title: 'Mixologia',
      description: 'Mixologia é um hobbie que abrange a confecção de bebidas alcoólicas variadas.',
      image: 'images/mixologia.png'
    },
    {
      title: 'Ourivesaria',
      description: 'Ourivesaria é a arte de criar e consertar peças de joias, utilizando metais preciosos.',
      image: 'images/ourivesaria.png' 
    },
    {
      title: 'Carpintaria',
      description: 'Carpintaria é o trabalho com madeira para criar móveis, estruturas e outros objetos.',
      image: 'images/carpintaria.png' 
    },
    {
      title: 'Costura',
      description: 'Costura é o processo de unir tecidos, criando roupas e outros itens de vestuário.',
      image: 'images/costura.png' 
    },
    {
      title: 'Florística',
      description: 'Florística é a arte de arranjar flores e plantas para decoração e eventos.',
      image: 'images/florística.png'
    },
    {
      title: 'Genérico',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit.',
      image: 'images/quizimage.png'
    },
    {
      title: 'Genérico',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit.',
      image: 'images/quizimage.png'
    },
    {
      title: 'Genérico',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit.',
      image: 'images/quizimage.png'
    }
  ];

  goToDetails(hobbyTitle: string): void {
    console.log(`Navegando para detalhes de: ${hobbyTitle}`);
  }

  currentScreenSize: string = 'desktop';

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
}
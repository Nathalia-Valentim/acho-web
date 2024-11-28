import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-quizdash',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './quizdash.component.html',
  styleUrl: './quizdash.component.css'
})

export class QuizdashComponent {
  currentImage: string = 'images/backquiz.png'; // Imagem padrão

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
  }

  observeScreenSize() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // <= 480px
      Breakpoints.Small,  // <= 768px
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.currentImage = 'images/quiz.png'; // Imagem para telas pequenas
      } else {
        this.currentImage = 'images/backquiz.png'; // Imagem para telas maiores
      }
    });
  }
}

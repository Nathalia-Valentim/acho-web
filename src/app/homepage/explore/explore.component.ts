import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  moveNext() {
    const container = document.querySelector('.hobby-containers');
    container?.scrollBy({ left: 300, behavior: 'smooth' });
  }
}

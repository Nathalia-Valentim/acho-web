import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

interface Hobby {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})

export class FavoritesComponent {
  schools = [
    {
      image: 'images/remoschool1.png',
      title: 'Treinamento Remo',
      category: 'Escola de treinamento',
      description: 'O Centro de Treinamento Remo é ideal para jovens atletas, oferecendo uma formação de alta qualidade com técnicas avançadas.',
    },

    {
      image: 'images/jiu-jitsu.png',
      title: 'Jiu-Jitsu',
      category: 'Artes Marciais',
      description: 'O Jiu-Jitsu é a arte de derrubar, imobilizar e fazer o oponente desistir, tudo com muita técnica e estratégia.',
    },
  ];

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/']);
  }
}

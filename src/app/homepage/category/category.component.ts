import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

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

  constructor(private router: Router) {}

  irParaCategoria(nome: string): void {
    this.router.navigate(['/category', nome]);
  }

  scrollDireita(): void {
    const container = document.querySelector('.categorias-container') as HTMLElement;
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }
}

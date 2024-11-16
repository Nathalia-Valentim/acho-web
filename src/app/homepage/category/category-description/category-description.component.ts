import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-description',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './category-description.component.html',
  styleUrl: './category-description.component.css'
})
export class CategoryDescriptionComponent implements OnInit {
  categoriaNome: string = '';
  categorias = [
    { nome: 'Futebol', imagem: 'images/futebol.png' },
    { nome: 'Basquete', imagem: 'images/basquete.png' },
    { nome: 'Ciclismo', imagem: 'images/ciclismo.png' },
    { nome: 'Natação', imagem: 'images/natacao.png' },
    { nome: 'Dança', imagem: 'images/dança.png' },
    { nome: 'Corrida', imagem: 'images/corrida.png' },
    { nome: 'Vôlei', imagem: 'images/volei.png' },
    { nome: 'Surf', imagem: 'images/surf.png' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {} // Injetando Router

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriaNome = params.get('nome') || '';
    });
  }

  // Método para redirecionar para a página de futebol
  irParaFutebol(): void {
    this.router.navigate(['/football']); // Navega para a página de futebol
  }
}


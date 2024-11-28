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
    {
      nome: 'Esportes',
      itens: [
        { nome: 'Futebol', imagem: 'images/futebol.png' },
        { nome: 'Basquete', imagem: 'images/basquete.png' },
        { nome: 'Ciclismo', imagem: 'images/ciclismo.png' },
        { nome: 'Natação', imagem: 'images/natacao.png' },
        { nome: 'Dança', imagem: 'images/dança.png' },
        { nome: 'Corrida', imagem: 'images/corrida.png' },
        { nome: 'Vôlei', imagem: 'images/volei.png' },
        { nome: 'Surf', imagem: 'images/surf.png' },
      ],
    },
    {
      nome: 'Artes Marciais',
      itens: [
        { nome: 'Judô', imagem: 'images/judo.png' },
        { nome: 'Karatê', imagem: 'images/karate.png' },
        { nome: 'Muay Thai', imagem: 'images/muay thai.png' },
        { nome: 'Kung Fu', imagem: 'images/kung-fu.png' },
        { nome: 'Jiu-jitsu', imagem: 'images/jiu-jitsu.png' },
        { nome: 'Taekwondo', imagem: 'images/taekwondo.png' },
      ],
    },
    {
      nome: 'Artisticos',
      itens: [
        { nome: 'Pintura', imagem: 'images/desenho-e-pintura.png' },
        { nome: 'Escultura', imagem: 'images/escultura.png' },
        { nome: 'Fotografia', imagem: 'images/fotografia-categoria.png' },
        { nome: 'Moda', imagem: 'images/corte-e-costura-moda.png' },
        { nome: 'Maquiagem', imagem: 'images/maquiagem.png' },
        { nome: 'Dança', imagem: 'images/danca.png' },
        { nome: 'Escrita e Poesia', imagem: 'images/escrita-e-poesia.png' },
        { nome: 'Teatro', imagem: 'images/teatro.png' },
        { nome: 'Cinema', imagem: 'images/cinema.png' },
        { nome: 'Artesanato', imagem: 'images/artesanato.png' },
      ],
    },
 
  ];

  itensCategoriaSelecionada: { nome: string; imagem: string }[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriaNome = params.get('nome') || '';
      this.atualizarItensCategoria();
    });
  }

  atualizarItensCategoria(): void {
    const categoria = this.categorias.find(c => c.nome === this.categoriaNome);
    this.itensCategoriaSelecionada = categoria ? categoria.itens : [];
  }

  navegarParaCategoria(nome: string): void {
    switch (nome) {
      case 'Futebol':
        this.router.navigate(['/football']);
        break;
      case 'Dança':
        this.router.navigate(['/dance']);
        break;
      case 'Cerâmica':
        this.router.navigate(['/ceramics']);
        break;
      case 'Leitura':
        this.router.navigate(['/reading']);
        break;
      default:
        console.log('Categoria não possui rota específica:', nome);
    }
  }
  
}


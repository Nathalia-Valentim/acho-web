import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  comments : { name: string; img: string; text: string; }[] = [
    { name: 'Julia Fernandes', img: 'images/profileavatar3.png', 
      text: ' Agora estou mergulhando nesse novo hobby de cerâmica e amando cada momento! Achar a escola perfeita pelo site foi um ganho de tempo enorme' },

    { name: 'Gabriel Moreira', img: 'images/profileavatar1.png', 
      text: 'Achei o site ACHÔ incrível! A interface é super intuitiva, e adorei o quiz que me ajudou a descobrir minha paixão por fotografia.' },

    { name: 'Ana Carolina', img: 'images/profileavatar2.png', 
      text: 'Finalmente encontrei um hobby que se encaixa perfeitamente no meu estilo de vida. A plataforma é fácil de usar e muito informativa!' },

    { name: 'Cristiano Mendes', img: 'images/profileavatar9.png', 
      text: 'Que site fantástico! O ACHÔ realmente entrega o que promete. Descobri que amo tocar violão e ainda achei escolas incríveis no processo.' },

    { name: 'Felipe Santos', img: 'images/profileavatar8.png', 
      text: 'Nunca pensei que seria tão fácil encontrar um hobby que se encaixa tão bem na minha rotina. O ACHÔ me guiou direitinho.' },

    { name: 'Thiago Pereira', img: 'images/profileavatar6.png', 
      text: 'O ACHÔ é o site que eu estava procurando há tempos. Consegui aprender mais sobre culinária e confeitaria.' },

    { name: 'Juliana Ribeiro', img: 'images/profileavatar4.png', 
      text: 'A interface é super amigável, e o conteúdo é muito rico. Me diverti muito lendo sobre um hobby que já possuo: a pintura.' },

    { name: 'Mariana Oliveira', img: 'images/profileavatar5.png', 
      text: 'Incrível, o quiz foi minha parte favorita já que estava bem perdida em relação ao que fazer. Descobri hobbies extraordináriamente inimagináveis' },

    { name: 'Clara Amorian', img: 'images/profileavatar7.png', 
      text: 'É um site que eu irei usar com frequência, muito bom. Recomendo fazer o quiz, me ajudou a encontrar um hobby que realmente combina com meus interesses.' }
  ];

  visibleComments: { name: string; img: string; text: string; }[] = [];
  currentPage = 0;
  itemsPerPage = 1;
  totalPages = Math.ceil(this.comments.length / this.itemsPerPage);

  constructor() {
    this.updateVisibleComments();
  }

  updateVisibleComments() {
  const startIndex = this.currentPage - 1 < 0 ? this.comments.length - 1 : this.currentPage - 1;
  const endIndex = (this.currentPage + 1) % this.comments.length;

  const previous = this.comments[startIndex];
  const current = this.comments[this.currentPage];
  const next = this.comments[endIndex];

  this.visibleComments = [previous, current, next];
  }

  next() {
    this.currentPage = (this.currentPage + 1) % this.comments.length;
    this.updateVisibleComments();
  }

  previous() {
    this.currentPage = (this.currentPage - 1 + this.comments.length) % this.comments.length;
    this.updateVisibleComments();
  }

  setPage(index: number) {
    this.currentPage = index;
    this.updateVisibleComments();
  }
}
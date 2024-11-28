import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Review {
  username: string;
  date: string;
  comment: string;
  rating: number;
  profilePic: string;
}

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css'
})

export class RatingsComponent {
  averageRating: number = 4.9;
  reviewCount: number = 2;
  reviews: Review[] = [
      {
          username: 'Ana Paula Moraes',
          date: '3 meses atrás',
          comment: 'Ótimo ambiente e treinamento de qualidade. Meu filho adora!',
          rating: 4.9,
          profilePic: 'images/profileana.png'
      },
      {
          username: 'Matheus Vieira',
          date: '2 semanas atrás',
          comment: 'Meu filho ama, toda semana fica ansioso para ir. Ótimos professores, aulas dinâmicas, ambiente acolhedor.',
          rating: 5.0,
          profilePic: 'images/profilematheus.png'
      }
  ];
  newComment: string = '';
  newRating: number = 5;

  addReview() {
      const newReview: Review = {
          username: 'Catarina Santos',
          date: new Date().toLocaleDateString(),
          comment: this.newComment,
          rating: this.newRating,
          profilePic: 'images/profile.png' 
      };

      this.reviews.push(newReview);
      this.reviewCount = this.reviews.length;
      this.newComment = '';
      this.newRating = 4;
  }

  getStars(rating: number) {
    const stars = [];
    const fullStarCount = Math.floor(rating); 
    const halfStar = rating % 1 >= 0.5 ? 'star-half' : ''; 
    const emptyStarCount = 5 - fullStarCount - (halfStar ? 1 : 0); 

    for (let i = 0; i < fullStarCount; i++) {
      stars.push('star-full');
    }

    if (halfStar) {
      stars.push(halfStar);
    }

    for (let i = 0; i < emptyStarCount; i++) {
      stars.push('star-empty');
    }

    return stars;
  }
}
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { CategoryComponent } from '../category/category.component';
import { ExploreComponent } from '../explore/explore.component'; 
import { QuizComponent } from '../quiz/quiz.component';
import { HobbyDoMesComponent } from '../hobby-do-mes/hobby-do-mes.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component'; 
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ NavbarComponent, GalleryComponent , CategoryComponent, ExploreComponent, QuizComponent, HobbyDoMesComponent, TestimonialsComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}

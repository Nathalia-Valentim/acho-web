import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { NavgreenComponent } from "./shared/components/navbar/navgreen/navgreen.component";
import { NavblueComponent } from "./shared/components/navbar/navblue/navblue.component";
import { GalleryComponent } from "./homepage/gallery/gallery.component";
import { CategoryComponent } from "./homepage/category/category.component";
import { QuizComponent } from "./homepage/quiz/quiz.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NavgreenComponent, NavblueComponent, GalleryComponent, CategoryComponent, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'acho-website';
}

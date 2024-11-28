import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quizinstructions',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './quizinstructions.component.html',
  styleUrl: './quizinstructions.component.css'
})
export class QuizinstructionsComponent {

}

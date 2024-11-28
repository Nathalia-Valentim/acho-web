import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



interface Question {
  question: string;
  options: string[];
}

@Component({
  selector: 'app-quizquestion',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule],
  templateUrl: './quizquestion.component.html',
  styleUrl: './quizquestion.component.css'
})

export class QuizquestionComponent {
  questions: Question[] = [
    {
      question: "1. O que você mais gosta de fazer no seu tempo livre?",
      options: [
        "Praticar esportes",
        "Aprender algo novo",
        "Fazer algo criativo",
        "Relaxar lendo ou assistindo a algo",
      ],
    },
    {
      question: "2. Quanto tempo você tem disponível por semana para dedicar a um hobby?",
      options: [
        "Menos de 1 hora",
        "1-3 horas",
        "3-5 horas",
        "Mais de 5 horas",
      ],
    },
    {
      question: "3. Você prefere atividades que desafiam sua criatividade ou sua lógica?",
      options: [
        "Criatividade",
        "Lógica",
        "Um equilíbrio entre os dois",
        "Nenhum dos dois",
      ],
    },
    {
      question: "4. Quanto você estaria disposto a investir em um novo hobby?",
      options: [
        "Até R$100",
        "Entre R$100 e R$500",
        "Acima de R$500",
        "Prefiro hobbies que não exijam muito investimento financeiro",
      ],
    },
    {
      question: "5. Você prefere hobbies que possam ser praticados em grupo ou sozinho?",
      options: [
        "Em grupo",
        "Sozinho",
        "Tanto faz",
      ],
    },
    {
      question: "6. Qual das atividades abaixo você acharia mais interessante?",
      options: [
        "Pintar ou desenhar",
        "Aprender programação",
        "Cozinhar uma nova receita",
        "Praticar um esporte",
      ],
    },
    {
      question: "7. Você gosta de atividades que envolvem movimento físico intenso?",
      options: [
        "Sim, adoro me movimentar",
        "Prefiro algo mais leve",
        "Gosto de um equilíbrio",
        "Prefiro atividades mentais",
      ],
    },
    {
      question: "8. Você prefere passar seu tempo livre ao ar livre ou em ambientes fechados?",
      options: [
        "Ao ar livre",
        "Em ambientes fechados",
        "Tanto faz",
      ],
    },
  ];

  currentQuestionIndex: number = 0;
  selectedOption: number | null = null;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  selectOption(index: number): void {
    this.selectedOption = index;
  }

  nextQuestion(): void {
    if (this.selectedOption !== null) {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedOption = null;
      } else {
        // Redirecionar para o componente desejado
        this.router.navigate(['/quizresult']);
      }
    }
  }

  get progressPercentage(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(97 + index).toLowerCase(); // 97 é o código ASCII para 'a'
  }

  currentScreenSize: string = 'desktop';
  observeScreenSize() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // <= 480px
      Breakpoints.Small,  // <= 768px
      Breakpoints.Medium, // <= 1024px
      Breakpoints.Large,  // <= 1440px
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.currentScreenSize = 'mobile';
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.currentScreenSize = 'tablet';
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.currentScreenSize = 'desktop-medium';
        } else if (result.breakpoints[Breakpoints.Large]) {
          this.currentScreenSize = 'desktop-large';
        }
      }
    });
  }
}
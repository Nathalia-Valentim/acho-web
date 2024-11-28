import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [ CommonModule, RouterModule, NavblueComponent, ActionBarComponent, FooterComponent, FormsModule ],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css'
})
export class TipsComponent {
  tips: string[] = [
    "Utilize exercícios de 'recepção e condução', onde você recebe a bola e imediatamente a conduz em diferentes direções para simular situações de jogo. Isso ajudará a melhorar sua coordenação e o tempo de reação.",
    "A defesa eficaz é uma combinação de posicionamento, leitura de jogo e habilidades de desarme. Para melhorar sua defesa, comece com exercícios de posicionamento. Trabalhe em manter uma posição adequada entre o atacante e o gol, garantindo que você esteja sempre entre o adversário e a bola.",
    "Para melhorar a precisão dos seus passes, pratique usar o lado interno do pé. Mantenha a perna de apoio levemente flexionada e aponte para o alvo enquanto executa o passe. Trabalhe em curtos passes com um companheiro ou contra uma parede, concentrando-se em manter o contato suave e direcionado na bola.",
    "Para aprimorar seu drible, comece com exercícios específicos que ajudam a desenvolver o controle da bola e a agilidade. Um ótimo exercício é o 'drible em zigue-zague.'",
    "Para melhorar a finalização, mire no gol e pratique diferentes chutes, como com o peito do pé para potência e com a parte interna para precisão.",
    "Use tênis adequados para o tipo de campo em que você joga – grama, campo sintético, etc.",
    "No futebol, a velocidade faz a diferença. Faça treinos focados em sprints de curta distância e aceleração, simulando o momento em que você precisa correr para atacar ou defender rapidamente."
  ];

  newTip: string = '';
  isInputActive: boolean = false;

  // Ativa o campo de texto para digitar uma nova dica
  activateInput() {
    this.isInputActive = true;
  }

  // Submete a nova dica
  submitTip() {
    if (this.newTip.trim()) {
      this.tips.push(this.newTip.trim());
      this.newTip = '';
      this.isInputActive = false;
    }
  }
}


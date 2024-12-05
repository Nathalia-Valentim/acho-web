import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})

export class ActionBarComponent {
  
  ativoBotao: string = 'practiceyourhobby';

  constructor(private router: Router) {}

  carregarComponente(componente: string) {
    this.ativoBotao = componente;
    this.router.navigate([componente]);
  }
}
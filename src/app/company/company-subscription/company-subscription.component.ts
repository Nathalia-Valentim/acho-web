import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-subscription.component.html',
  styleUrl: './company-subscription.component.css'
})
export class CompanySubscriptionComponent {
  isExpanded = false;
  students = [
    { name: 'Carina da Silva' },
    { name: 'Gustavo Andrade' },
    { name: 'Jorge Pinheiros Santos' },
    { name: 'Eduardo Silva Pereira' }
  ];

  // Alternar visibilidade da lista
  toggleCourse() {
    this.isExpanded = !this.isExpanded;
  }
}

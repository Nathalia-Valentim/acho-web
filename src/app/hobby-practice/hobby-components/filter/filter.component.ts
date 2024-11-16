import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  minPrice: number = 30;  // Valor mínimo fixo
  maxPrice: number = 1000;  // Valor máximo ajustável

  // Limites do filtro de preço
  maxLimit: number = 1000;

  // Função para atualizar o preço máximo
  updateMaxPrice() {
    if (this.maxPrice <= this.minPrice) {
      this.maxPrice = this.minPrice + 1;
    }
  }
}
